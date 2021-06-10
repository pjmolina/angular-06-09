import { Pipe, PipeTransform } from '@angular/core';
import { WeatherInfo } from '../weather/weather.component';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(col: WeatherInfo[], searchString: string): WeatherInfo[] {
    if (!searchString) {
      return col;
    }
    return (col || []).filter((item) =>
      item.city.toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
