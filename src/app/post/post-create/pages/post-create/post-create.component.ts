import { CdkPortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, first } from 'rxjs';
import {
  CustomConfirmDialog,
  CustomConfirmDialogService,
} from 'src/app/confirm-dialog/services/custom-confirm-dialog.service';
import { ROUTES } from 'src/app/shared/constants/route.constant';
import { PostDto, PostInputDto } from 'src/app/shared/dto/post.dto';
import { CanComponentDeactivate } from 'src/app/shared/guards/can-deactivate-guard.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCreateComponent implements OnDestroy, OnInit, CanComponentDeactivate {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;
  private destroyRef = inject(DestroyRef);
  public readonly ROUTES = ROUTES;

  public form = this.fb.group({
    title: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.min(3)] }),
    body: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.min(3)] }),
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService<PostDto>,
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private cdr: ChangeDetectorRef,
    private language: LanguageService,
    private seoService: SeoService,
    private translate: TranslateService,
    private lr: LocalizeRouterService,
    private snackBar: MatSnackBar,
    private router: Router,
    private confirm: CustomConfirmDialogService
  ) {}

  public canDeactivate(): boolean | Observable<boolean> {
    return this.form.pristine || this.confirm.openCustomConfirmDialog(CustomConfirmDialog.UnsavedWork);
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);
    setTimeout(() => this.cdr.detectChanges());

    this.language.language$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      const canonical = this.lr.translateRoute(`/${ROUTES.POSTS.CREATE}`) as string;
      this.seoService.setSeo(
        {
          title: this.translate.instant(`SEO.${ROUTES.POSTS.CREATE}.title`),
          description: this.translate.instant(`SEO.${ROUTES.POSTS.CREATE}.description`),
        },
        canonical
      );
    });
  }

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  public onSubmit() {
    this.apiService
      .create(this.form.value as PostInputDto)
      .pipe(first())
      .subscribe({
        next: (post) => {
          this.form.reset(post);
          this.snackBar.open(this.translate.instant('response.create.success'), this.translate.instant('UNI.close'));
          const translatedRoute = this.lr.translateRoute(`/`);
          this.router.navigate([translatedRoute]);
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.create.failed'), this.translate.instant('UNI.close'));
        },
      });
  }

  public onReset(event: Event): void {
    event.preventDefault();
    this.form.reset();
  }
}
