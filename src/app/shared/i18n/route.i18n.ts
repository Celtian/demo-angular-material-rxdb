import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { RouteDefinitionDto } from '../dto/route.dto';

export const ROUTES_I18N: RouteDefinitionDto<{
  route: string;
  title: string;
  seo: { title: string; description: string };
}> = {
  APP: {
    POSTS: {
      route: _('ROUTES.app.posts'),
      title: _('TITLES.app.posts'),
      seo: {
        title: _('SEO.app.posts.title'),
        description: _('SEO.app.posts.description'),
      },
    },
    NOT_FOUND: {
      route: _('ROUTES.app.not-found'),
      title: _('TITLES.app.not-found'),
      seo: {
        title: _('SEO.app.not-found.title'),
        description: _('SEO.app.not-found.description'),
      },
    },
  },
  POSTS: {
    DETAIL: {
      route: _('ROUTES.posts.detail'),
      title: _('TITLES.posts.detail'),
      seo: {
        title: _('SEO.posts.detail.title'),
        description: _('SEO.posts.detail.description'),
      },
    },
    CREATE: {
      route: _('ROUTES.posts.create'),
      title: _('TITLES.posts.create'),
      seo: {
        title: _('SEO.posts.create.title'),
        description: _('SEO.posts.create.description'),
      },
    },
    EDIT: {
      route: _('ROUTES.posts.edit'),
      title: _('TITLES.posts.edit'),
      seo: {
        title: _('SEO.posts.edit.title'),
        description: _('SEO.posts.edit.description'),
      },
    },
  },
};
