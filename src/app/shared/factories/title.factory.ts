import { ResolveFn } from '@angular/router';
import { PageOptions } from '../dto/page.dto';
import { PAGE_ACTION_I18N, PAGE_SECTION_I18N } from '../i18n/page.i18n';

export const titleResolverFactory = (options: PageOptions): ResolveFn<string> => {
  return (route) => {
    let identifier = undefined;
    if (options.identifier) {
      identifier =
        route.paramMap.get(options.identifier) || route.parent?.paramMap.get(options.identifier) || undefined;
    }
    const data = {
      section: options.section.map((i) => PAGE_SECTION_I18N[i]),
      action: options.action?.map((i) => PAGE_ACTION_I18N[i]),
      title: identifier,
    };
    return JSON.stringify(data);
  };
};
