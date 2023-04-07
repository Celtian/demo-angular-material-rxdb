import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { CanDeactivateGuardService } from 'src/app/shared/guards/can-deactivate-guard.service';
import { PostEditComponent } from './pages/post-edit/post-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PostEditComponent,
    canDeactivate: [CanDeactivateGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LocalizeRouterModule.forChild(routes)],
  exports: [RouterModule, LocalizeRouterModule],
})
export class PostEditRoutingModule {}
