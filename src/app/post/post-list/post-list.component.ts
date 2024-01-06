import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  ViewChild,
  effect,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { combineLatest, debounceTime, filter, first } from 'rxjs';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { PostDeleteDirective } from 'src/app/shared/directives/post-delete.directive';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { getParamPage } from 'src/app/shared/rxjs/get-param-page';
import { getParamQuery } from 'src/app/shared/rxjs/get-param-query';
import { getParamSort } from 'src/app/shared/rxjs/get-param-sort';
import { ApiService } from 'src/app/shared/services/api.service';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { RxdbProvider } from 'src/app/shared/services/db.service';

@Component({
  standalone: true,
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    LocalizeRouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    TranslateModule,
    PortalModule,
    PostDeleteDirective,
  ],
})
export class PostListComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;
  public readonly displayedColumns: string[] = ['id', 'title', 'actions'];
  public readonly pageSizeOptions = [5, 10, 25, 100];

  private destroyRef = inject(DestroyRef);
  public data = signal<PostDto[]>([]);
  public totalCount = signal(0);

  public query = signal('');
  public pageSize = signal(5);
  public pageIndex = signal(1);
  public sortBy = signal<keyof PostDto>('id');
  public sortDirection = signal<'asc' | 'desc'>('asc');

  constructor(
    private apiService: ApiService<PostDto>,
    private rxdbProvider: RxdbProvider,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbsPortalService: BreadcrumbsPortalService,
  ) {
    effect(() => {
      this.apiService
        .listAndCount({
          page: this.pageIndex(),
          limit: this.pageSize(),
          sort: this.sortBy(),
          order: this.sortDirection(),
          query: this.query(),
        })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((posts) => {
          this.data.set(posts.items);
          this.totalCount.set(posts.totalCount);
        });
    });
  }

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);

    combineLatest([
      this.route.queryParamMap.pipe(getParamPage()),
      this.route.queryParamMap.pipe(getParamQuery()),
      this.route.queryParamMap.pipe(getParamSort()),
    ])
      .pipe(debounceTime(1000), takeUntilDestroyed(this.destroyRef))
      .subscribe(([page, query, sort]) => {
        this.query.set(query);
        this.pageIndex.set(page.pageIndex || 1);
        this.pageSize.set(page.pageSize || 5);
        this.sortBy.set(sort.sortBy || 'id');
        this.sortDirection.set(sort.sortDirection || 'asc');
      });

    this.rxdbProvider.dataBaseReady$
      .pipe(
        filter((ready) => !!ready),
        first(),
      )
      .subscribe(() => this.bindData());
  }

  private bindData(): void {}

  public onPageChange(event: PageEvent): void {
    let pageIndex = null;
    if (event.pageSize === this.pageSize()) {
      pageIndex = event.pageIndex + 1 > 1 ? event.pageIndex + 1 : null;
    }
    this.setFiltersToRoute({
      pageIndex,
      pageSize: event.pageSize,
    });
  }

  public trackByPostId(_: number, target: PostDto): string | number {
    return target.id;
  }

  public onDeleted(id: string): void {
    this.data.update((value) => value.filter((i) => i.id !== id));
  }

  public onSortChange(event: Sort): void {
    this.setFiltersToRoute({
      sortBy: event.active,
      sortDirection: event.direction,
      pageIndex: null,
    });
  }

  public onQueryChange(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.setFiltersToRoute({
      query: query ? encodeURIComponent(query) : null,
      pageIndex: null,
    });
  }

  public onQueryRemove(): void {
    this.setFiltersToRoute({
      query: null,
      pageIndex: null,
    });
  }

  public onClear(): void {
    this.setFiltersToRoute({
      query: null,
      pageIndex: null,
      pageSize: null,
      sortBy: null,
      sortDirection: null,
    });
  }

  private setFiltersToRoute(queryParams?: Params | null): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
