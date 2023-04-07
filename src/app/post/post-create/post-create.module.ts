import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogModule } from 'src/app/confirm-dialog/confirm-dialog.module';
import { PostCreateComponent } from './pages/post-create/post-create.component';
import { PostCreateRoutingModule } from './post-create-routing.module';

@NgModule({
  declarations: [PostCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    PortalModule,
    PostCreateRoutingModule,
    TranslateModule,
    ConfirmDialogModule,
  ],
})
export class PostCreateModule {}
