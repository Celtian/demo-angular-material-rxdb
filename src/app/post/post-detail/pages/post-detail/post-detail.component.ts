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
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { delay, filter, first, map, switchMap, tap } from 'rxjs';
import {
  CustomConfirmDialog,
  CustomConfirmDialogService,
} from 'src/app/confirm-dialog/services/custom-confirm-dialog.service';
import { DataSource } from 'src/app/shared/classes/data-source';
import { DEFAULT_POST } from 'src/app/shared/constants/post.constant';
import { ROUTES } from 'src/app/shared/constants/route.constant';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;
  private destroyRef = inject(DestroyRef);
  public dataSource = signal(new DataSource<PostDto>(DEFAULT_POST));
  public readonly ROUTES = ROUTES;

  constructor(
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private language: LanguageService,
    private seoService: SeoService,
    private translate: TranslateService,
    private lr: LocalizeRouterService,
    private apiService: ApiService<PostDto>,
    private snackBar: MatSnackBar,
    private router: Router,
    private confirm: CustomConfirmDialogService
  ) {}

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
                const canonical = this.lr.translateRoute(`/${id}`) as string;
                this.seoService.setSeo(
                  {
                    title: this.translate.instant(`SEO.${ROUTES.POSTS.DETAIL}.title`),
                    description: this.translate.instant(`SEO.${ROUTES.POSTS.DETAIL}.description`),
                  },
                  canonical
                );
              },
            })
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();

    idFromRoute
      .pipe(
        delay(500),
        tap((id) => {
          if (typeof id !== 'string' || !id) {
            this.dataSource.mutate((value) => value.setData(DEFAULT_POST));
          }
        }),
        filter((id) => typeof id === 'string' && !!id),
        switchMap((id) => this.apiService.detail(String(id))),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (post) => this.dataSource.mutate((value) => value.setData(post)),
        error: (err) => {
          const error = this.translate.instant('ERROR.unexpected-exception');
          this.dataSource.mutate((value) => value.setError(error));
        },
      });
  }

  public onDelete(): void {
    this.confirm
      .openCustomConfirmDialog(CustomConfirmDialog.Delete)
      .pipe(
        first(),
        filter((res) => !!res),
        switchMap(() => this.apiService.delete(this.dataSource().data.id))
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
