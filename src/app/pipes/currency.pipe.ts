import { Pipe, PipeTransform } from '@angular/core';

/**
 *  Currency formatea numeros segun moneda
 *  1.   1234.556 EUR -> 1234.56 EUR
 *  2.   1234.556 USD -> $ 1234.56
 *
 *  TDD.  Test Driven Development
 */
@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currency: string): string {
    if (!value) {
      return '-';
    }
    switch ((currency || '').toLowerCase()) {
      case 'eur':
        return value.toFixed(2) + ' EUR';
      case 'usd':
        return '$ ' + value.toFixed(2);
      default:
        return value.toFixed(2) + ' ' + currency;
    }
  }
}
