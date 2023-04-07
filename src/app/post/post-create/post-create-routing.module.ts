import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { CanDeactivateGuardService } from 'src/app/shared/guards/can-deactivate-guard.service';
import { PostCreateComponent } from './pages/post-create/post-create.component';

const routes: Routes = [
  {
    path: '',
    component: PostCreateComponent,
    canDeactivate: [CanDeactivateGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LocalizeRouterModule.forChild(routes)],
  exports: [RouterModule, LocalizeRouterModule],
})
export class PostCreateRoutingModule {}
