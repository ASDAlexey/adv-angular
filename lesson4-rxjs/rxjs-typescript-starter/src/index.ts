// import { timer } from 'rxjs';

// timer(0, 1000).subscribe((n: number) => console.log(n));

/*console.log('BEFORE');
requestAnimationFrame(() => {console.log('requestAnimationFrame')});
setTimeout(() => { console.log('setTimneout'); });
Promise.resolve().then(() => {console.log('Promise resolve')});
console.log('AFTER');*/

// before,after,promise,requestAnimationFrame,setTimeout

/*import { asyncScheduler, combineLatest, of } from 'rxjs';
import { observeOn } from 'rxjs/operators';

const o1 = of(1, 2).pipe(observeOn(asyncScheduler));
const o2 = of(2);
const o = combineLatest(o1, o2);
o.subscribe({
  next: (value: any) => console.log('Next:', value), // [2,2]
  complete: () => console.log('Complete'),
  error: (error) => console.log('Error:', error),
});*/

import { asapScheduler, asyncScheduler, merge, of, queueScheduler, VirtualAction, VirtualTimeScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

const virtualTimeScheduler = new VirtualTimeScheduler(VirtualAction);

const queue$ = of('queue').pipe(observeOn(queueScheduler));
const asap$ = of('asap').pipe(observeOn(asapScheduler));
const async$ = of('async').pipe(observeOn(asyncScheduler));
const virtual$ = of('virtual').pipe(observeOn(virtualTimeScheduler));

const o = merge(async$, asap$, queue$, virtual$);

o.subscribe({
  next: (value: any) => console.log('Next:', value), // queue, asap, async, virtual with timeout 3000
  complete: () => console.log('Complete'),
  error: (error) => console.log('Error:', error),
});

setTimeout(() => {
  virtualTimeScheduler.flush();
});

