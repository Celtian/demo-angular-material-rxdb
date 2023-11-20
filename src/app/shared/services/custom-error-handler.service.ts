import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorHandlerService implements ErrorHandler {
  constructor(
    private ngZone: NgZone,
    private snackbar: MatSnackBar,
    private translate: TranslateService,
  ) {}

  public handleError(error: unknown): void {
    this.ngZone.run(() => {
      this.snackbar.open(this.translate.instant('error.unexpected-exception'), 'danger');
    });

    throw error;
  }
}
