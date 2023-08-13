import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { first, map, Observable } from 'rxjs';
import { ConfirmDialogService } from './confirm-dialog.service';

export enum CustomConfirmDialog {
  Delete,
  UnsavedWork,
}

@Injectable({ providedIn: 'root' })
export class CustomConfirmDialogService {
  constructor(
    private confirm: ConfirmDialogService,
    private translate: TranslateService,
  ) {}

  public openCustomConfirmDialog(type: CustomConfirmDialog): Observable<boolean> {
    const title = this.getTitle(type);
    const content = this.getContent(type);
    return this.open(title, content);
  }

  private getTitle(type: CustomConfirmDialog) {
    switch (type) {
      case CustomConfirmDialog.Delete:
        return this.translate.instant('custom-confirm-dialog.delete-post.title');
      case CustomConfirmDialog.UnsavedWork:
        return this.translate.instant('custom-confirm-dialog.unsaved-work.title');
      default:
        return this.translate.instant('custom-confirm-dialog.default.title');
    }
  }

  private getContent(type: CustomConfirmDialog) {
    switch (type) {
      case CustomConfirmDialog.Delete:
        return this.translate.instant('custom-confirm-dialog.delete-post.content');
      case CustomConfirmDialog.UnsavedWork:
        return this.translate.instant('custom-confirm-dialog.unsaved-work.content');
      default:
        return this.translate.instant('custom-confirm-dialog.default.content');
    }
  }

  private open(title: string, content: string): Observable<boolean> {
    return this.confirm.open(title, content).pipe(
      first(),
      map((res) => !!res),
    );
  }
}
