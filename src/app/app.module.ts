import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  Logger2Service,
  LoggerNothingService,
  LoggerService,
} from './services/logger.service';
import { WeatherComponent } from './weather/weather.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ResaltarDirective,
    CurrencyPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [{ provide: LoggerService, useClass: Logger2Service }],
  bootstrap: [AppComponent],
})
export class AppModule {}
