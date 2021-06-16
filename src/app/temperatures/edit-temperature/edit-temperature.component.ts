import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { WeatherInfo } from '../weather/weather';

@Component({
  selector: 'app-edit-temperature',
  templateUrl: './edit-temperature.component.html',
  styleUrls: ['./edit-temperature.component.scss'],
})
export class EditTemperatureComponent implements OnInit {
  @Input() cityInfo?: WeatherInfo = undefined;
  error = '';
  modoVer = true;

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
            this.cityInfo = c;
            this.error = '';
          },
          (error) => {
            this.error = resolveError(error);
          }
        );
      }
    });
    this.route.data.subscribe((data) => {
      if (data.action === 'VER') {
        this.modoVer = true;
      } else {
        this.modoVer = false;
      }
    });
  }

  update(): void {
    if (!this.cityInfo) {
      return;
    }
    this.cityService.updateCity(this.cityInfo).subscribe({
      next: () => {
        this.error = '';
        this.router.navigate(['/temperaturas']);
      },
      error: (e) => {
        this.error = resolveError(e);
      },
    });
  }
  cancel(): void {
    this.router.navigate(['/temperaturas']);
  }
}

function resolveError(error: any): string {
  if (error.status) {
    if (error.status === 404) {
      return 'El objeto no se encontro.';
    }
  }
  if (error.message) {
    return error.message;
  }
  return error.toString();
}
