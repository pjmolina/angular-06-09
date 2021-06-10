import { Component } from '@angular/core';
import { WeatherInfo } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app0';
  log: string = '';

  citiesWeather: WeatherInfo[] = [
    {
      city: 'Sevilla',
      temperature: '36',
      state: 'Caluroso',
    },
    {
      city: 'Albacete',
      temperature: '21',
      state: 'Caluroso',
    },
    {
      city: 'Cordoba',
      temperature: '38',
      state: 'Caluroso',
    },
    {
      city: 'Londres',
      temperature: '12',
      state: 'LLuvioso',
    },
  ];

  onChange(wi: WeatherInfo): void {
    console.log(wi);
    // this.log += wi.city + ' ' + wi.temperature + ' ' + wi.state;
    this.log += `${wi.city} ${wi.temperature}ºC ${wi.state}`;
  }
}
