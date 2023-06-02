import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { ROUTES } from 'src/app/shared/constants/route.constant';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  constructor(
    private seoService: SeoService,
    private translate: TranslateService,
    private lr: LocalizeRouterService,
    private language: LanguageService
  ) {}

  public ngOnInit(): void {
    this.language.language$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      const canonical = this.lr.translateRoute(`/${ROUTES.APP.NOT_FOUND}`) as string;
      this.seoService.setSeo(
        {
          title: this.translate.instant(`SEO.${ROUTES.APP.NOT_FOUND}.title`),
          description: this.translate.instant(`SEO.${ROUTES.APP.NOT_FOUND}.description`),
        },
        canonical
      );
    });
  }
}
