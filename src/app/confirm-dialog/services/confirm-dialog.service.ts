import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable()
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}

  public open(title: string, content: string): Observable<any> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: 'sm',
      data: { title, content },
    });
    return dialogRef.afterClosed();
  }
}
