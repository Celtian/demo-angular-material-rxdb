import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ApiService } from 'src/app/shared/services/api.service';
import { RxdbProvider } from 'src/app/shared/services/db.service';

@UntilDestroy()
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCreateComponent {
  public form = this.fb.group({
    title: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.min(3)] }),
    body: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.min(3)] }),
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService<{ body: string; title: string }>,
    private rxdbProvider: RxdbProvider
  ) {}

  public onSubmit() {
    this.rxdbProvider.dataBaseReady$.subscribe((res) => console.log(res));

    console.log('create');
    this.apiService.create({ title: 'test', body: 'body' }).subscribe((res) => {
      console.log('x', res);

      this.apiService.list().subscribe((ress) => {
        console.log('i', ress);

        /*
        this.apiService.delete(ress[0].id).subscribe((res) => {
          console.log('e', res);
        });
        */

        this.apiService.patch(ress[0].id, { title: 'title', body: 'XXXXX' }).subscribe((res) => {
          console.log(res);
          this.apiService.list().subscribe((res) => {
            console.log('ii', res);
          });
        });
      });
    });
  }

  public onReset(event: Event): void {
    event.preventDefault();
    this.form.reset();
  }
}
