import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { WeatherInfo } from '../weather/weather';

@Component({
  selector: 'app-create-temperature',
  templateUrl: './create-temperature.component.html',
  styleUrls: ['./create-temperature.component.scss'],
})
export class CreateTemperatureComponent implements OnInit {
  cityInfo: WeatherInfo = {
    city: '',
    state: '',
    temperature: '20',
  };
  error = '';

  constructor(private router: Router, private cityService: CityService) {}

  ngOnInit(): void {}

  create(): void {
    this.cityService.createCity(this.cityInfo).subscribe({
      next: () => {
        this.error = '';
        this.router.navigate(['/temperaturas']);
      },
      error: (e) => {
        this.error = e.toString();
      },
    });
  }
  cancel(): void {
    this.router.navigate(['/temperaturas']);
  }
}
