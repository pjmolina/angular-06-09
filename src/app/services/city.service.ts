import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WeatherInfo } from '../weather/weather';

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  getCities(): Observable<WeatherInfo[]> {
    const url = `${urlBase}/cities`;
    const headers = {
      Accept: 'application/json',
    };
    return this.http
      .get(url, { headers })
      .pipe(map((d) => this.adaptArray(d as any[])));
  }

  createCity() {}

  updateCity() {}

  deleteCity() {}

  adaptArray(d: any[]): WeatherInfo[] {
    // return d.map((it) => this.adaptObject(it));
    return (d || []).map(this.adaptObject);
  }
  adaptObject(d: any): WeatherInfo {
    return {
      city: d.name,
      temperature: d.temperature,
      state: d.state,
    } as WeatherInfo;
  }
}
