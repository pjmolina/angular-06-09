import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { WeatherInfo } from './weather';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [],
})
export class WeatherComponent implements OnInit, OnDestroy {
  @Input() city: string = '';
  @Input() temperature: string = '';
  @Input() state: string = '';

  @Output() cityChange = new EventEmitter<string>();

  @Output() temperatureChange = new EventEmitter<WeatherInfo>();

  constructor(private logger: LoggerService) {
    this.logger.log('constructor ' + this.city);
  }

  onChangeCity(): void {
    this.cityChange.emit(this.city);
  }

  ngOnInit(): void {
    this.logger.log('OnInit ' + this.city + this.temperature + this.state);
  }
  ngOnDestroy(): void {
    this.logger.log('OnDestroy ' + this.city);
  }

  get hot(): boolean {
    return parseInt(this.temperature, 10) > 30;
  }

  onIncrement(): void {
    this.temperature = (parseInt(this.temperature, 10) + 1).toString();
    this.temperatureChange.emit({
      city: this.city,
      temperature: this.temperature,
      state: this.state,
    });
  }
  onDecrement(): void {
    this.temperature = (parseInt(this.temperature, 10) - 1).toString();
    this.temperatureChange.emit({
      city: this.city,
      temperature: this.temperature,
      state: this.state,
    });
  }
}
