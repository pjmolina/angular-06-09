import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CityService } from './services/city.service';
import { WeatherInfo } from './weather/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app0';
  log: string = '';
  searchText = '';
  sub?: Subscription;

  valorNumerico = 12345.9999;

  citiesWeather: WeatherInfo[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    // Observables
    this.sub = this.cityService.getCities().subscribe({
      next: (next) => {
        console.log('Observable con datos:', next);
        this.citiesWeather = next;
      },
      error: (error) => {
        console.log('Observable con error.' + error.message);
        this.log = error.message;
      },
      complete: () => {
        console.log('Observable completado.');
      },
    });

    // Promeseas
    // this.cityService
    //   .getCities()
    //   .then((cities) => {
    //     this.citiesWeather = cities;
    //   })
    //   .catch((error) => {
    //     this.log = error.message;
    //   });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onChange(wi: WeatherInfo): void {
    console.log(wi);
    // this.log += wi.city + ' ' + wi.temperature + ' ' + wi.state;
    this.log += `${wi.city} ${wi.temperature}ºC ${wi.state}`;
  }
}
