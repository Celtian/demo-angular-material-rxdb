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
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { delay, switchMap } from 'rxjs';
import { DataSource } from 'src/app/shared/classes/data-source';
import { DEFAULT_POST } from 'src/app/shared/constants/post.constant';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { PostDeleteDirective } from 'src/app/shared/directives/post-delete.directive';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { filterString } from 'src/app/shared/rxjs/filter-string';
import { getParamId } from 'src/app/shared/rxjs/get-param-id';
import { setInitialIfNotString } from 'src/app/shared/rxjs/set-initial-if-not-string';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';

@Component({
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
    PostDeleteDirective,
  ],
})
export class PostDetailComponent implements OnInit, OnDestroy {
  private breadcrumbsPortalService = inject(BreadcrumbsPortalService);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  private translate = inject(TranslateService);
  private lr = inject(LocalizeRouterService);
  private apiService = inject<ApiService<PostDto>>(ApiService);
  private router = inject(Router);

  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;
  private destroyRef = inject(DestroyRef);
  public dataSource = new DataSource<PostDto>(DEFAULT_POST);
  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);
    setTimeout(() => this.cdr.markForCheck());

    this.route.paramMap
      .pipe(
        delay(500),
        getParamId(),
        setInitialIfNotString(this.dataSource),
        filterString(),
        switchMap((id) => this.apiService.detail(id)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (post) => this.dataSource.setData(post),
        error: () => {
          const error = this.translate.instant('error.unexpected-exception');
          this.dataSource.setError(error);
        },
      });
  }

  public onDeleted(): void {
    const translatedRoute = this.lr.translateRoute(`/`);
    this.router.navigate([translatedRoute]);
  }
}
