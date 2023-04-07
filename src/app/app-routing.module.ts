import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './shared/constants/route.constant';

export const routes: Routes = [
  {
    path: '',
    title: ROUTES.APP.POSTS,
    loadChildren: () => import('./post/post-list/post-list.module').then((m) => m.PostListModule),
  },
  {
    path: ROUTES.POSTS.CREATE,
    title: ROUTES.POSTS.CREATE,
    loadChildren: () => import('./post/post-create/post-create.module').then((m) => m.PostCreateModule),
  },
  {
    path: ':id',
    title: ROUTES.POSTS.DETAIL,
    loadChildren: () => import('./post/post-detail/post-detail.module').then((m) => m.PostDetailModule),
  },
  {
    path: `:id/${ROUTES.POSTS.EDIT}`,
    title: ROUTES.POSTS.EDIT,
    loadChildren: () => import('./post/post-edit/post-edit.module').then((m) => m.PostEditModule),
  },
  {
    path: '**',
    title: ROUTES.APP.NOT_FOUND,
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 20],
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
