import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class MatPaginationIntlService extends MatPaginatorIntl {
  constructor(private translate: TranslateService) {
    super();
    this.translate.onLangChange.subscribe(() => {
      this.translateLabels();
    });
    this.translateLabels();
  }

  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    const of = this.translate ? this.translate.instant('mat-paginator.of') : 'of';
    if (length === 0 || pageSize === 0) {
      return '0 ' + of + ' ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize > length ? (Math.ceil(length / pageSize) - 1) * pageSize : page * pageSize;

    const endIndex = Math.min(startIndex + pageSize, length);
    return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
  };

  injectTranslateService(translate: TranslateService): void {
    this.translate = translate;

    this.translate.onLangChange.subscribe(() => {
      this.translateLabels();
    });

    this.translateLabels();
  }

  translateLabels(): void {
    this.firstPageLabel = this.translate.instant('mat-paginator.first-page');
    this.itemsPerPageLabel = this.translate.instant('mat-paginator.items-per-page');
    this.lastPageLabel = this.translate.instant('mat-paginator.last-page');
    this.nextPageLabel = this.translate.instant('mat-paginator.next-page');
    this.previousPageLabel = this.translate.instant('mat-paginator.previous-page');
    this.changes.next(); // Fire a change event to make sure that the labels are refreshed
  }
}
