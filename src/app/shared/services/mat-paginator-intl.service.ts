import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class MatPaginationIntlService extends MatPaginatorIntl {
  constructor(private translateService: TranslateService) {
    super();
    this.translateService.onLangChange.subscribe((_event: Event) => {
      this.translateLabels();
    });
    this.translateLabels();
  }

  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    const of = this.translateService ? this.translateService.instant('mat-paginator.of') : 'of';
    if (length === 0 || pageSize === 0) {
      return '0 ' + of + ' ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize > length ? (Math.ceil(length / pageSize) - 1) * pageSize : page * pageSize;

    const endIndex = Math.min(startIndex + pageSize, length);
    return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
  };

  injectTranslateService(translate: TranslateService): void {
    this.translateService = translate;

    this.translateService.onLangChange.subscribe(() => {
      this.translateLabels();
    });

    this.translateLabels();
  }

  translateLabels(): void {
    this.firstPageLabel = this.translateService.instant('mat-paginator.first-page');
    this.itemsPerPageLabel = this.translateService.instant('mat-paginator.items-per-page');
    this.lastPageLabel = this.translateService.instant('mat-paginator.last-page');
    this.nextPageLabel = this.translateService.instant('mat-paginator.next-page');
    this.previousPageLabel = this.translateService.instant('mat-paginator.previous-page');
    this.changes.next(); // Fire a change event to make sure that the labels are refreshed
  }
}
