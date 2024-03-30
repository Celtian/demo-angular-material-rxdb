import { Directive, HostListener, input, output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { filter, first, switchMap } from 'rxjs';
import { PostDto } from '../dto/post.dto';
import { ApiService } from '../services/api.service';
import { CustomConfirmDialog, CustomConfirmDialogService } from '../services/custom-confirm-dialog.service';

@Directive({
  selector: '[appPostDelete]',
  standalone: true,
})
export class PostDeleteDirective {
  public id = input.required<string>({ alias: 'appPostDelete' });
  public deleted = output<string>();

  constructor(
    private apiService: ApiService<PostDto>,
    private confirm: CustomConfirmDialogService,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
  ) {}

  @HostListener('click')
  public onClick(): void {
    this.confirm
      .openCustomConfirmDialog(CustomConfirmDialog.Delete)
      .pipe(
        first(),
        filter((res) => !!res),
        switchMap(() => this.apiService.delete(this.id())),
      )
      .subscribe({
        next: () => {
          this.deleted.emit(this.id());
          this.snackBar.open(this.translate.instant('response.delete.success'), this.translate.instant('uni.close'));
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.delete.failed'), this.translate.instant('uni.close'));
        },
      });
  }
}
