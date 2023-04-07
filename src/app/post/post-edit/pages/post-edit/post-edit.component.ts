import { CdkPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { Observable, delay, filter, first, map, switchMap, tap } from 'rxjs';
import {
  CustomConfirmDialog,
  CustomConfirmDialogService,
} from 'src/app/confirm-dialog/services/custom-confirm-dialog.service';
import { DataSource } from 'src/app/shared/classes/data-source';
import { DEFAULT_POST } from 'src/app/shared/constants/post.constant';
import { ROUTES } from 'src/app/shared/constants/route.constant';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { CanComponentDeactivate } from 'src/app/shared/guards/can-deactivate-guard.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@UntilDestroy()
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

  public dataSource = new DataSource<PostDto>(DEFAULT_POST);
  public readonly ROUTES = ROUTES;

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
    private snackBar: MatSnackBar
  ) {}

  public canDeactivate(): boolean | Observable<boolean> {
    return this.form.pristine || this.confirm.openCustomConfirmDialog(CustomConfirmDialog.UnsavedWork);
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);
    setTimeout(() => this.cdr.markForCheck(), 0);

    const idFromRoute = this.route.paramMap.pipe(map((paramMap) => paramMap.get('id')));

    idFromRoute
      .pipe(
        filter((id) => !Number.isNaN(Number(id))),
        switchMap((id) =>
          this.language.language$.pipe(
            tap({
              next: () => {
                const canonical = this.lr.translateRoute(`/${id}/${ROUTES.POSTS.EDIT}`) as string;
                this.seoService.setSeo(
                  {
                    title: this.translate.instant(`SEO.${ROUTES.POSTS.EDIT}.title`),
                    description: this.translate.instant(`SEO.${ROUTES.POSTS.EDIT}.description`),
                  },
                  canonical
                );
              },
            })
          )
        ),
        untilDestroyed(this)
      )
      .subscribe();

    idFromRoute
      .pipe(
        delay(500),
        tap((id) => {
          if (typeof id !== 'string' || !id) {
            this.dataSource.setData(DEFAULT_POST);
            this.cdr.markForCheck();
          }
        }),
        filter((id) => typeof id === 'string' && !!id),
        switchMap((id) => this.apiService.detail(String(id))),
        untilDestroyed(this)
      )
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
          this.form.patchValue(post);
          this.cdr.markForCheck();
        },
        error: (err) => {
          const error = this.translate.instant('ERROR.unexpected-exception');
          this.dataSource.setError(error);
          this.cdr.markForCheck();
        },
      });
  }

  public onSubmit(): void {
    this.apiService
      .patch(this.dataSource.data.id, this.form.value)
      .pipe(first())
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
          this.form.reset(post);
          this.cdr.markForCheck();
          this.snackBar.open(this.translate.instant('response.update.success'), this.translate.instant('UNI.close'));
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.update.failed'), this.translate.instant('UNI.close'));
        },
      });
  }

  public onReset(event: Event): void {
    event.preventDefault();
    this.form.reset(this.dataSource.data);
  }

  public onDelete(): void {
    this.confirm
      .openCustomConfirmDialog(CustomConfirmDialog.Delete)
      .pipe(
        first(),
        filter((res) => !!res),
        switchMap(() => this.apiService.delete(this.dataSource.data.id))
      )
      .subscribe({
        next: () => {
          this.snackBar.open(this.translate.instant('response.delete.success'), this.translate.instant('UNI.close'));
          const translatedRoute = this.lr.translateRoute(`/`);
          this.router.navigate([translatedRoute]);
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.delete.failed'), this.translate.instant('UNI.close'));
        },
      });
  }

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }
}
