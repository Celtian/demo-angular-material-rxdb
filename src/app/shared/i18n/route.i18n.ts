import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { RouteDefinitionDto } from '../dto/route.dto';

export const ROUTES_I18N: RouteDefinitionDto<{
  route: string;
  title: string;
  seo: { title: string; description: string };
}> = {
  APP: {
    HOMEPAGE: {
      route: _('ROUTES.app.homepage'),
      title: _('TITLES.app.homepage'),
      seo: {
        title: _('SEO.app.homepage.title'),
        description: _('SEO.app.homepage.description'),
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
};
