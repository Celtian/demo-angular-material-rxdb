import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PostEditComponent } from './pages/post-edit/post-edit.component';
import { PostEditRoutingModule } from './post-edit-routing.module';

@NgModule({
  declarations: [PostEditComponent],
  imports: [CommonModule, PostEditRoutingModule, ReactiveFormsModule],
})
export class PostEditModule {}
