import { InjectionToken } from '@angular/core';

export interface I18nConfig {
  version: string;
  defaultLanguage: string;
}

export const defaultI18nConfig: I18nConfig = {
  version: '0.0.0',
  defaultLanguage: 'en',
};

export const I18N_CONFIG_TOKEN = new InjectionToken<I18nConfig>('i18n-version');
