import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PageOptions } from '../dto/page.dto';

@Injectable({
  providedIn: 'root',
})
export class CustomTitleStrategyService extends TitleStrategy {
  private readonly siteName = 'RDXB demo';

  constructor(
    private translate: TranslateService,
    private title: Title,
    private meta: Meta,
  ) {
    super();
  }

  public updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      const parsedData = this.parseTitleData(title);
      this.translate.getTranslation(this.translate.currentLang).subscribe(() => {
        this.translateTitleFromParts(parsedData, parsedData.identifier);
        this.updateMeta(parsedData.description);
      });
    } else {
      this.title.setTitle(this.siteName);
      this.updateMeta();
    }
  }

  private translateTitleFromParts(parsedData: PageOptions, translatedTitle?: string): void {
    const section = parsedData.section.map((item) => this.translate.instant(item) as string);
    const action = parsedData?.action?.map((item) => this.translate.instant(item) as string) || [];
    let parts = [...action, ...section, this.siteName];
    if (translatedTitle) {
      parts = [translatedTitle, ...parts];
    }
    this.title.setTitle(parts.join(' - '));
  }

  private parseTitleData(title: string): PageOptions {
    const data = JSON.parse(title);
    return {
      section: data.section,
      action: data.action,
      identifier: data.title,
      description: data.description,
    };
  }

  private updateMeta(key?: string): void {
    this.meta.updateTag({ property: 'og:title', content: this.title.getTitle() });
    if (key) {
      const description = this.translate.instant(`seo.${key}.description`);
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    } else {
      this.meta.removeTag('name="description"');
      this.meta.removeTag('property="og:description"');
    }
  }
}
