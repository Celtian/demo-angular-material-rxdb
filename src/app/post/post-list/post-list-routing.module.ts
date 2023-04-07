import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { PostListComponent } from './pages/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LocalizeRouterModule.forChild(routes)],
  exports: [RouterModule, LocalizeRouterModule],
})
export class PostListRoutingModule {}
