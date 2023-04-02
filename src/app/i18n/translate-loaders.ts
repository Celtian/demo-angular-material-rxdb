import { isPlatformBrowser, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { LocalizeParser, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs';
import { I18nConfig } from './i18n.utils';

export class TranslateUniversalLoader implements TranslateLoader {
  constructor(private http: HttpClient, private config: I18nConfig, private baseHref: string) {}

  public getTranslation(lang: string): Observable<any> {
    return this.http.get<any>(`${this.baseHref}assets/i18n/${lang}.json?v=${this.config.version}`);
  }
}

export function translateLoaderFactory(
  httpClient: HttpClient,
  platform: any,
  config: I18nConfig,
  baseHref: string
): TranslateLoader {
  return isPlatformBrowser(platform)
    ? new TranslateHttpLoader(httpClient, `${baseHref}assets/i18n/`, `.json?v=${config.version}`)
    : new TranslateUniversalLoader(httpClient, config, baseHref);
}

export class LocalizeUniversalLoader extends LocalizeParser {
  constructor(
    translate: TranslateService,
    location: Location,
    settings: LocalizeRouterSettings,
    private http: HttpClient,
    private config: I18nConfig,
    private baseHref: string
  ) {
    super(translate, location, settings);
  }

  public load(routes: Routes): Promise<any> {
    return new Promise((resolve: any) => {
      this.http.get<any>(`${this.baseHref}assets/locales.json?v=${this.config}`).subscribe((data: any) => {
        this.locales = data.locales;
        this.prefix = data.prefix;
        this.init(routes).then(resolve);
      });
    });
  }
}

export function localizeLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  http: HttpClient,
  platform: any,
  config: I18nConfig,
  baseHref: string
): LocalizeParser {
  return isPlatformBrowser(platform)
    ? new LocalizeRouterHttpLoader(
        translate,
        location,
        settings,
        http,
        `${baseHref}assets/locales.json?v=${config.version}`
      )
    : new LocalizeUniversalLoader(translate, location, settings, http, config, baseHref);
}
