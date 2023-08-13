import { Routes } from '@angular/router';
import { ROUTE_DEFINITION } from './shared/constants/route-definition.constant';
import { CanDeactivateGuardService } from './shared/guards/can-deactivate-guard.service';

export const routes: Routes = [
  {
    path: '',
    title: ROUTE_DEFINITION.APP.POSTS,
    loadComponent: () => import('./post/post-list/post-list.component').then((m) => m.PostListComponent),
  },
  {
    path: ROUTE_DEFINITION.POSTS.CREATE,
    title: ROUTE_DEFINITION.POSTS.CREATE,
    canDeactivate: [CanDeactivateGuardService],
    loadComponent: () => import('./post/post-create/post-create.component').then((m) => m.PostCreateComponent),
  },
  {
    path: ':id',
    title: ROUTE_DEFINITION.POSTS.DETAIL,
    loadComponent: () => import('./post/post-detail/post-detail.component').then((m) => m.PostDetailComponent),
  },
  {
    path: `:id/${ROUTE_DEFINITION.POSTS.EDIT}`,
    title: ROUTE_DEFINITION.POSTS.EDIT,
    canDeactivate: [CanDeactivateGuardService],
    loadComponent: () => import('./post/post-edit/post-edit.component').then((m) => m.PostEditComponent),
  },
  {
    path: '**',
    title: ROUTE_DEFINITION.APP.NOT_FOUND,
    loadComponent: () => import('./not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
