import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxAppVersionDirective } from 'ngx-app-version';
import { VERSION } from 'src/environments/version';
import { DEFAULT_LANGUAGE } from './shared/constants/language.constant';
import { RxdbProvider } from './shared/services/db.service';
import { LanguageService } from './shared/services/language.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  hostDirectives: [NgxAppVersionDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public endYear = new Date(VERSION.date).getFullYear();
  public lang = DEFAULT_LANGUAGE;

  constructor(private language: LanguageService, private rxdbProvider: RxdbProvider) {
    this.language.initLang();
  }

  public ngOnInit(): void {
    this.language.language$.pipe(untilDestroyed(this)).subscribe((language) => (this.lang = language));
    this.rxdbProvider.initDB('posts-db');
  }

  public toggleLanguage() {
    this.language.setLang(this.lang === 'en' ? 'cs' : 'en');
  }
}
