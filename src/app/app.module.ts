import { PortalModule } from '@angular/cdk/portal';
import { ErrorHandler, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleStrategy } from '@angular/router';
import { NgxAppVersionModule } from 'ngx-app-version';
import { NgxTranslateVersionModule } from 'ngx-translate-version';
import { VERSION } from 'src/environments/version';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomErrorHandlerService } from './shared/services/custom-error-handler.service';
import { CustomTitleStrategyService } from './shared/services/custom-title-strategy.service';
import { MatPaginationIntlService } from './shared/services/mat-paginator-intl.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    PortalModule,
    NgxTranslateVersionModule.forRoot(routes, {
      version: VERSION.version,
    }),
    NgxAppVersionModule.forRoot({
      version: VERSION.version,
    }),
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { verticalPosition: 'top', horizontalPosition: 'right' } },
    { provide: ErrorHandler, useClass: CustomErrorHandlerService },
    { provide: TitleStrategy, useClass: CustomTitleStrategyService },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginationIntlService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
