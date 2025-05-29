import { Inject, Injectable, DOCUMENT } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, LOCALES } from '../constants/language.constant';
import { Language } from '../dto/language.dto';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<Language>(DEFAULT_LANGUAGE);

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private lr: LocalizeRouterService,
    private translate: TranslateService,
    private meta: Meta,
  ) {}

  public initLang(): void {
    this.setLang(this.translate.currentLang as Language);
  }

  public get language$(): Observable<Language> {
    return this.languageSubject.asObservable();
  }

  public setLang(language: Language): void {
    this.lr.changeLanguage(language, { replaceUrl: true }, true);
    this.setHtmlLang(language);
    this.setOgTags(language);
    this.languageSubject.next(language);
  }

  public get currentLanguage(): string {
    return this.languageSubject.value;
  }

  private setHtmlLang(language: string): void {
    if (this?.doc?.documentElement) {
      this.doc.documentElement.lang = language;
    }
  }

  private setOgTags(language: Language): void {
    this.meta.removeTag(`content='${this.formatLang(language)}'`);
    this.meta.updateTag({ property: 'og:locale', content: this.formatLang(language) });
    this.meta.addTags(
      AVAILABLE_LANGUAGES.filter((lang) => lang !== language).map((lang) => ({
        property: 'og:locale:alternate',
        content: this.formatLang(lang),
      })),
    );
  }

  private formatLang(language: Language): string {
    return LOCALES[language];
  }
}
