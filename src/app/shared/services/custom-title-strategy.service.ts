import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CustomTitleStrategyService extends TitleStrategy {
  private readonly siteName = 'CRUD demo';

  constructor(private translateService: TranslateService, private title: Title) {
    super();
  }

  public updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.translateService.get(`TITLES.${title}`).subscribe((translatedTitle) => {
        this.title.setTitle(`${translatedTitle} - ${this.siteName}`);
      });
    } else {
      this.title.setTitle(this.siteName);
    }
  }
}
