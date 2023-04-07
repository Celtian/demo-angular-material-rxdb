import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, filter, first, switchMap } from 'rxjs';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { RxdbProvider } from 'src/app/shared/services/db.service';

@UntilDestroy()
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit {
  public data: PostDto[] = [];
  public totalCount = 0;

  public readonly displayedColumns: string[] = ['id', 'title', 'actions'];
  public readonly pageSizeOptions = [5, 10, 25, 100];

  constructor(
    private apiService: ApiService<PostDto>,
    private rxdbProvider: RxdbProvider,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.rxdbProvider.dataBaseReady$
      .pipe(
        filter((ready) => !!ready),
        first()
      )
      .subscribe(() => {
        this.bindData();
      });
  }

  private bindData(): void {
    this.route.queryParams
      .pipe(
        debounceTime(500),
        switchMap((params) =>
          this.apiService.listAndCount(
            // TODO move to coerce utils
            Number.isNaN(Number(params?.['pageIndex'])) ? 1 : Number(params?.['pageIndex']),
            Number.isNaN(Number(params?.['pageSize'])) ? 5 : Number(params?.['pageSize'])
            // params?.['sortBy'] as any,
            // params?.['sortDirection'] as any,
            // params?.['query'] as any
          )
        ),
        untilDestroyed(this)
      )
      .subscribe((posts) => {
        this.data = posts.items;
        this.totalCount = posts.totalCount;
        this.cdr.markForCheck();
      });
  }

  public onPageChange(event: any): void {
    this.router.navigate([], {
      queryParams: {
        pageIndex: event.pageIndex > 0 ? event.pageIndex : null,
        pageSize: event.pageSize,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public trackByPostId(index: number, target: PostDto): string | number {
    return target.id;
  }

  public onDelete(row: PostDto): void {
    /*
    this.confirm
      .openCustomConfirmDialog(CustomConfirmDialog.Delete)
      .pipe(
        first(),
        filter((res) => !!res),
        switchMap(() => this.apiService.delete(row.id))
      )
      .subscribe({
        next: () => {
          this.data = this.data.filter((i) => i.id !== row.id);
          this.cdr.markForCheck();
          this.snackBar.open(this.translate.instant('response.delete.success'), this.translate.instant('UNI.close'));
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.delete.failed'), this.translate.instant('UNI.close'));
        },
      });
      */
  }
}
