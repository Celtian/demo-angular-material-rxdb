import { Portal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgxAppVersionDirective } from 'ngx-app-version';
import { Observable } from 'rxjs';
import { VERSION } from 'src/environments/version';
import { DEFAULT_LANGUAGE } from './shared/constants/language.constant';
import { BreadcrumbsPortalService } from './shared/services/breadcrumbs-portal.service';
import { RxdbProvider } from './shared/services/db.service';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  hostDirectives: [NgxAppVersionDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  public endYear = new Date(VERSION.date).getFullYear();
  public breadcrumbsPortal$!: Observable<Portal<any>>;
  public lang = DEFAULT_LANGUAGE;

  constructor(
    private language: LanguageService,
    private rxdbProvider: RxdbProvider,
    private breadcrumbsPortalService: BreadcrumbsPortalService
  ) {
    this.language.initLang();
  }

  public ngOnInit(): void {
    this.rxdbProvider.initDB('posts-db');
    this.breadcrumbsPortal$ = this.breadcrumbsPortalService.portal$;
    this.language.language$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((language) => (this.lang = language));
  }

  public toggleLanguage() {
    this.language.setLang(this.lang === 'en' ? 'cs' : 'en');
  }
}
