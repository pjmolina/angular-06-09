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
  getCity(name: string): Observable<WeatherInfo> {
    const id = encodeURIComponent(name);
    const url = `${urlBase}/cities/${id}`;
    const headers = {
      Accept: 'application/json',
    };
    return this.http
      .get(url, { headers })
      .pipe(map((d) => this.adaptObject(d)));
  }

  getCitiesWithPromise(): Promise<WeatherInfo[]> {
    const url = `${urlBase}/cities`;
    const headers = {
      Accept: 'application/json',
    };
    return this.http
      .get(url, { headers })
      .pipe(map((d) => this.adaptArray(d as any[])))
      .toPromise(); // <- la diferencia
  }

  createCity(weatherInfo: WeatherInfo): Observable<WeatherInfo> {
    const url = `${urlBase}/cities`;
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const payload = {
      name: weatherInfo.city,
      temperature: weatherInfo.temperature,
      state: weatherInfo.state,
    };
    return this.http.post(url, payload, { headers }).pipe(
      // map(d => this.adaptObject(d))
      map(this.adaptObject)
    );
  }

  updateCity(weatherInfo: WeatherInfo): Observable<WeatherInfo> {
    const id = encodeURIComponent(weatherInfo.city);
    const url = `${urlBase}/cities/${id}`;
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    // modificaciones parciales: PATCH, PUT
    const payload = {
      temperature: weatherInfo.temperature,
      state: weatherInfo.state,
    };
    return this.http.put(url, payload, { headers }).pipe(
      // map(d => this.adaptObject(d))
      map(this.adaptObject)
    );
  }

  deleteCity(weatherInfo: WeatherInfo): Observable<WeatherInfo> {
    const id = encodeURIComponent(weatherInfo.city);
    const url = `${urlBase}/cities/${id}`;
    const headers = {
      Accept: 'application/json',
    };
    return this.http.delete(url, { headers }).pipe(map(this.adaptObject));
  }

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
