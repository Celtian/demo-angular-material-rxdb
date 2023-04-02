import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAppVersionModule } from 'ngx-app-version';
import { VERSION } from 'src/environments/version';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { I18nModule } from './i18n';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    I18nModule.forRoot({
      version: VERSION.version,
      defaultLanguage: 'en',
    }),
    NgxAppVersionModule.forRoot({
      version: VERSION.version,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
