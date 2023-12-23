import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { PageAction, PageSection } from '../dto/page.dto';

export const PAGE_ACTION_I18N: Record<PageAction, string> = {
  list: _('titles.action.list'),
  create: _('titles.action.create'),
  detail: _('titles.action.detail'),
  edit: _('titles.action.edit'),
};

export const PAGE_SECTION_I18N: Record<PageSection, string> = {
  posts: _('titles.section.posts'),
  'not-found': _('titles.section.not-found'),
};
