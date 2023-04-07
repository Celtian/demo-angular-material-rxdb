import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostDetailRoutingModule } from './post-detail-routing.module';

@NgModule({
  declarations: [PostDetailComponent],
  imports: [CommonModule, PostDetailRoutingModule],
})
export class PostDetailModule {}
