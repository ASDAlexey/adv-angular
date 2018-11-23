import { cold, getTestScheduler } from 'jasmine-marbles';
import { concat, delay, filter, map, retry, take } from 'rxjs/operators';
import { interval, of } from 'rxjs';

describe('TEST', () => {
  it('simple', () => {
    const source = 'x-x-x|'; // - это интервал времени по умолчанию 10mc
    const expected = 'x-x-x|';
    expect(source).toBe(expected);
  });

  it('concat', () => {
    const one$ = cold('x-x|');
    const two$ = cold('-y|');
    const expected = cold('x-x-y|');
    expect(one$.pipe(concat(two$))).toBeObservable(expected);
  });

  it('concat with values', () => {
    const one$ = cold('x-x|', { x: 'some value' });
    const two$ = cold('-y|', { y: 999 });
    const expected = cold('a-a-b|', { a: 'some value', b: 999 });
    expect(one$.pipe(concat(two$))).toBeObservable(expected);
  });

  it('async', () => {
    const o$ = interval(10, getTestScheduler()).pipe(
      take(5),
      filter(v => v % 2 === 0),
    );
    getTestScheduler().flush();

    const expected = cold('-a-b-(c|)', { a: 0, b: 2, c: 4 });

    expect(o$).toBeObservable(expected);
  });

  it('delay', () => {
    const o$ = cold('a|', { a: 1 }).pipe(delay(20, getTestScheduler()));
    getTestScheduler().flush();

    const expected = cold('--a|', { a: 1 });

    expect(o$).toBeObservable(expected);
  });

  it('handle errors', () => {
    const o$ = of(1, 2, 3).pipe(
      map(val => {
        if (val > 2) {
          throw 'Number to high!';
        }

        return val;
      }),
      retry(2),
    );

    const expected = cold('(ababab#)', { a: 1, b: 2, c: 3 }, 'Number to high!');

    expect(o$).toBeObservable(expected);
  });
});

