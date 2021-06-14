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
import { WeatherComponent } from './weather/weather.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ResaltarDirective,
    CurrencyPipe,
    FilterByNamePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: LoggerService, useClass: Logger2Service }],
  bootstrap: [AppComponent],
})
export class AppModule {}
