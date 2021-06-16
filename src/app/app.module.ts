import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  Logger2Service,
  LoggerNothingService,
  LoggerService,
} from './services/logger.service';
import { ResaltarDirective } from './directives/resaltar.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    CurrencyPipe,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: LoggerService, useClass: Logger2Service },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
