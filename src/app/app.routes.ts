import { Routes } from '@angular/router';
import { ROUTE_DEFINITION } from './shared/constants/route-definition.constant';
import { titleResolverFactory } from './shared/factories/title.factory';
import { CanDeactivateGuardService } from './shared/guards/can-deactivate-guard.service';

export const routes: Routes = [
  {
    path: '',
    title: titleResolverFactory({
      description: ROUTE_DEFINITION.APP.POSTS,
      section: ['posts'],
      action: ['list'],
    }),
    loadComponent: () => import('./post/post-list/post-list.component').then((m) => m.PostListComponent),
  },
  {
    path: ROUTE_DEFINITION.POSTS.CREATE,
    title: titleResolverFactory({
      description: ROUTE_DEFINITION.POSTS.CREATE,
      section: ['posts'],
      action: ['create'],
    }),
    canDeactivate: [CanDeactivateGuardService],
    loadComponent: () => import('./post/post-create/post-create.component').then((m) => m.PostCreateComponent),
  },
  {
    path: ':id',
    title: titleResolverFactory({
      description: ROUTE_DEFINITION.POSTS.DETAIL,
      section: ['posts'],
      action: ['detail'],
      identifier: 'id',
    }),
    loadComponent: () => import('./post/post-detail/post-detail.component').then((m) => m.PostDetailComponent),
  },
  {
    path: `:id/${ROUTE_DEFINITION.POSTS.EDIT}`,
    title: titleResolverFactory({
      description: ROUTE_DEFINITION.POSTS.EDIT,
      section: ['posts'],
      action: ['edit'],
      identifier: 'id',
    }),
    canDeactivate: [CanDeactivateGuardService],
    loadComponent: () => import('./post/post-edit/post-edit.component').then((m) => m.PostEditComponent),
  },
  {
    path: '**',
    title: titleResolverFactory({
      description: ROUTE_DEFINITION.APP.NOT_FOUND,
      section: ['not-found'],
    }),
    loadComponent: () => import('./not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
