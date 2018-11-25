import { Component } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ssr';

  constructor(state: TransferState) {
    const items = state.get('items');
    if (!items) {
      // ajax
      state.set('items', []);
    }
  }
}
