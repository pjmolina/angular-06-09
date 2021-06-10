import { CurrencyPipe } from './currency.pipe';

/**
 *
 *  *  Currency formatea numeros segun moneda
 *  1.   1234.556 EUR -> 1234.56 EUR
 *  2.   1234.556 USD -> $ 1234.56
 *  3.   0 -> -
 */
describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const sut = new CurrencyPipe();
    expect(sut).toBeTruthy();
  });
  it('should 1234.56 EUR when 1234.556 and EUR', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(1234.556, 'EUR')).toEqual('1234.56 EUR');
  });
  it('should $ 1234.56 when 1234.556 and USD', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(1234.556, 'USD')).toEqual('$ 1234.56');
  });
  it('should 1234.56 YEN when 1234.556 and YEN', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(1234.556, 'YEN')).toEqual('1234.56 YEN');
  });
  it('should render -  when 0', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(0, 'USD')).toEqual('-');
  });
});
