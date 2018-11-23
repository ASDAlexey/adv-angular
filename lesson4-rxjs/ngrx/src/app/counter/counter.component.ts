import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { INCREMENT } from '../counter.reducer';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter$ = this.store.pipe(select('count'));

  constructor(private store: Store<AppState>) {}


  substruct() {
    // this.counter--;
    this.store.dispatch({ type: INCREMENT });
  }

  add() {
    // this.counter++;
    this.store.dispatch({ type: INCREMENT });
  }
}
