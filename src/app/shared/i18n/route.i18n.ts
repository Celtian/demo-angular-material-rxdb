import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { RouteDefinitionDto } from '../dto/route.dto';

export const ROUTES_I18N: RouteDefinitionDto<{
  route: string;
  seo: { title: string; description: string };
}> = {
  APP: {
    POSTS: {
      route: _('routes.app.posts'),
      seo: {
        title: _('seo.app.posts.title'),
        description: _('seo.app.posts.description'),
      },
    },
    NOT_FOUND: {
      route: _('routes.app.not-found'),
      seo: {
        title: _('seo.app.not-found.title'),
        description: _('seo.app.not-found.description'),
      },
    },
  },
  POSTS: {
    DETAIL: {
      route: _('routes.posts.detail'),
      seo: {
        title: _('seo.posts.detail.title'),
        description: _('seo.posts.detail.description'),
      },
    },
    CREATE: {
      route: _('routes.posts.create'),
      seo: {
        title: _('seo.posts.create.title'),
        description: _('seo.posts.create.description'),
      },
    },
    EDIT: {
      route: _('routes.posts.edit'),
      seo: {
        title: _('seo.posts.edit.title'),
        description: _('seo.posts.edit.description'),
      },
    },
  },
};
