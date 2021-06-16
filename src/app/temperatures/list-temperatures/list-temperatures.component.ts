import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CityService } from 'src/app/services/city.service';
import { WeatherInfo } from 'src/app/temperatures/weather/weather';

@Component({
  selector: 'app-list-temperatures',
  templateUrl: './list-temperatures.component.html',
  styleUrls: ['./list-temperatures.component.scss'],
})
export class ListTemperaturesComponent implements OnInit, OnDestroy {
  searchText = '';
  citiesWeather: WeatherInfo[] = [];
  log: string = '';
  sub?: Subscription;

  valorNumerico = 12345.9999;

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    // rxjs 5   subscribe(data => {...}, error => , complete => {})   subscribe(d,e,c)  @deprecated
    // rxjs 6   subscribe({
    //               next:,
    //                 error:
    //                 complete:
    //           })

    // Observables
    this.sub = this.cityService.getCities().subscribe({
      next: (n) => {
        console.log('Observable con datos:', n);
        this.citiesWeather = n;
      },
      error: (e) => {
        console.log('Observable con error.' + e.message);
        this.log = e.message;
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
