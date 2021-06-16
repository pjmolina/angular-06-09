import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { WeatherInfo } from '../weather/weather';

@Component({
  selector: 'app-delete-temperature',
  templateUrl: './delete-temperature.component.html',
  styleUrls: ['./delete-temperature.component.scss'],
})
export class DeleteTemperatureComponent implements OnInit {
  city?: string;
  weatherInfo?: WeatherInfo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const cityName = params['name'];
      if (cityName) {
        this.cityService.getCity(cityName).subscribe(
          (c) => {
            this.city = cityName;
            this.weatherInfo = c;
          },
          (error) => {
            this.city = undefined;
            this.weatherInfo = undefined;
          }
        );
      }
    });
  }
  cancel(): void {
    this.router.navigate(['/temperaturas']);
  }
  delete(): void {
    if (this.weatherInfo) {
      this.cityService.deleteCity(this.weatherInfo).subscribe((c) => {
        this.cancel();
      });
    }
  }
}
