import { CdkPortal, PortalModule } from '@angular/cdk/portal';
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
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, delay, filter, first, map, switchMap, tap } from 'rxjs';
import { DataSource } from 'src/app/shared/classes/data-source';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { DEFAULT_POST } from 'src/app/shared/constants/post.constant';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { CanComponentDeactivate } from 'src/app/shared/guards/can-deactivate-guard.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { CustomConfirmDialog, CustomConfirmDialogService } from 'src/app/shared/services/custom-confirm-dialog.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  standalone: true,
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    LocalizeRouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    TranslateModule,
    PortalModule,
    ConfirmDialogComponent,
  ],
})
export class PostEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;
  private destroyRef = inject(DestroyRef);
  public dataSource = new DataSource<PostDto>(DEFAULT_POST);
  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;

  public form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.min(3)]],
    body: ['', [Validators.required, Validators.min(3)]],
  });

  constructor(
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private route: ActivatedRoute,
    private language: LanguageService,
    private seoService: SeoService,
    private translate: TranslateService,
    private lr: LocalizeRouterService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private apiService: ApiService<PostDto>,
    private confirm: CustomConfirmDialogService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  public canDeactivate(): boolean | Observable<boolean> {
    return this.form.pristine || this.confirm.openCustomConfirmDialog(CustomConfirmDialog.UnsavedWork);
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);
    setTimeout(() => this.cdr.markForCheck());

    const idFromRoute = this.route.paramMap.pipe(map((paramMap) => paramMap.get('id')));

    idFromRoute
      .pipe(
        filter((id) => !Number.isNaN(Number(id))),
        switchMap((id) =>
          this.language.language$.pipe(
            tap({
              next: () => {
                const canonical = this.lr.translateRoute(`/${id}/${ROUTE_DEFINITION.POSTS.EDIT}`) as string;
                this.seoService.setSeo(
                  {
                    title: this.translate.instant(`seo.${ROUTE_DEFINITION.POSTS.EDIT}.title`),
                    description: this.translate.instant(`seo.${ROUTE_DEFINITION.POSTS.EDIT}.description`),
                  },
                  canonical,
                );
              },
            }),
          ),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();

    idFromRoute
      .pipe(
        delay(500),
        tap((id) => {
          if (typeof id !== 'string' || !id) {
            this.dataSource.setData(DEFAULT_POST);
          }
        }),
        filter((id) => typeof id === 'string' && !!id),
        switchMap((id) => this.apiService.detail(String(id))),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
          this.form.patchValue(post);
        },
        error: () => {
          const error = this.translate.instant('error.unexpected-exception');
          this.dataSource.setError(error);
        },
      });
  }

  public onSubmit(): void {
    this.apiService
      .patch(this.dataSource.data().id, this.form.value)
      .pipe(first())
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
          this.form.reset(post);
          this.snackBar.open(this.translate.instant('response.update.success'), this.translate.instant('uni.close'));
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.update.failed'), this.translate.instant('uni.close'));
        },
      });
  }

  public onReset(event: Event): void {
    event.preventDefault();
    this.form.reset(this.dataSource.data());
  }

  public onDelete(): void {
    this.confirm
      .openCustomConfirmDialog(CustomConfirmDialog.Delete)
      .pipe(
        first(),
        filter((res) => !!res),
        switchMap(() => this.apiService.delete(this.dataSource.data().id)),
      )
      .subscribe({
        next: () => {
          this.snackBar.open(this.translate.instant('response.delete.success'), this.translate.instant('uni.close'));
          const translatedRoute = this.lr.translateRoute(`/`);
          this.router.navigate([translatedRoute]);
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.delete.failed'), this.translate.instant('uni.close'));
        },
      });
  }

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }
}
