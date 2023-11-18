import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { UpperCasePipe } from '@angular/common';
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
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { delay, filter, first, map, switchMap, tap } from 'rxjs';
import { DataSource } from 'src/app/shared/classes/data-source';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { DEFAULT_POST } from 'src/app/shared/constants/post.constant';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { CustomConfirmDialog, CustomConfirmDialogService } from 'src/app/shared/services/custom-confirm-dialog.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  standalone: true,
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    UpperCasePipe,
    RouterLink,
    LocalizeRouterModule,
    PortalModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TranslateModule,
    ConfirmDialogComponent,
  ],
})
export class PostDetailComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;
  private destroyRef = inject(DestroyRef);
  public dataSource = new DataSource<PostDto>(DEFAULT_POST);
  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;

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
    private confirm: CustomConfirmDialogService,
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
                    title: this.translate.instant(`SEO.${ROUTE_DEFINITION.POSTS.DETAIL}.title`),
                    description: this.translate.instant(`SEO.${ROUTE_DEFINITION.POSTS.DETAIL}.description`),
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
        next: (post) => this.dataSource.setData(post),
        error: () => {
          const error = this.translate.instant('ERROR.unexpected-exception');
          this.dataSource.setError(error);
        },
      });
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
