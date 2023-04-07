import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { PostEditComponent } from './pages/post-edit/post-edit.component';
import { PostEditRoutingModule } from './post-edit-routing.module';

@NgModule({
  declarations: [PostEditComponent],
  imports: [
    CommonModule,
    PostEditRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    PortalModule,
  ],
})
export class PostEditModule {}
