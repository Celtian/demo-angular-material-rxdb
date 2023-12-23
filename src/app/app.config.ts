import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';
import { ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleStrategy, provideRouter, withViewTransitions } from '@angular/router';
import { NgxAppVersionModule } from 'ngx-app-version';
import { NgxTranslateVersionModule } from 'ngx-translate-version';
import { VERSION } from '../environments/version';
import { routes } from './app.routes';
import { CustomErrorHandlerService } from './shared/services/custom-error-handler.service';
import { CustomTitleStrategyService } from './shared/services/custom-title-strategy.service';
import { MatPaginationIntlService } from './shared/services/mat-paginator-intl.service';

registerLocaleData(localeCs, 'cs-CS');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      MatSnackBarModule,
      MatDialogModule,
      NgxTranslateVersionModule.forRoot(routes, {
        version: VERSION.version,
      }),
      NgxAppVersionModule.forRoot({
        version: VERSION.version,
      }),
    ),
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { verticalPosition: 'top', horizontalPosition: 'right' } },
    { provide: ErrorHandler, useClass: CustomErrorHandlerService },
    { provide: TitleStrategy, useClass: CustomTitleStrategyService },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginationIntlService,
    },
  ],
};
