import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subscriberValues: number[][] = [];
  subscriberIndex = 0;
  counter = 0;
  // subject = new Subject<number>();
  // subject = new BehaviorSubject<number>(0);
  // subject = new ReplaySubject<number>(Number.POSITIVE_INFINITY, 3000);
  // subject = new ReplaySubject<number>(5, 3000); // помнить последние 5 значений, 3000 - время в течении которого мы будем получать значени поле их emit
  subject = new AsyncSubject<number>(); // subject который возвращает значения только после того когджа мы сделали complete

  emitValue() {
    ++this.counter;
    this.subject.next(this.counter);
  }

  complete() {
    this.subject.complete();
  }

  subscribe() {
    this.subscriberIndex++;
    const subscriberValues = [];
    this.subscriberValues.push(subscriberValues);
    this.subject.subscribe(value => subscriberValues.push(value));
  }
}
