import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { SeoService } from 'src/app/shared/services/seo.service';
import { ROUTE_DEFINITION } from '../shared/constants/route-definition.constant';

@Component({
  standalone: true,
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatIconModule, TranslateModule, LocalizeRouterModule],
})
export class NotFoundComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  constructor(
    private seoService: SeoService,
    private translate: TranslateService,
    private lr: LocalizeRouterService,
    private language: LanguageService,
  ) {}

  public ngOnInit(): void {
    this.language.language$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      const canonical = this.lr.translateRoute(`/${ROUTE_DEFINITION.APP.NOT_FOUND}`) as string;
      this.seoService.setSeo(
        {
          title: this.translate.instant(`seo.${ROUTE_DEFINITION.APP.NOT_FOUND}.title`),
          description: this.translate.instant(`seo.${ROUTE_DEFINITION.APP.NOT_FOUND}.description`),
        },
        canonical,
      );
    });
  }
}
