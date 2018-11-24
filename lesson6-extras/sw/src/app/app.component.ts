import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'sw title nnn';

  constructor(private updates: SwUpdate) {
    this.updates.available.subscribe(() => {
      alert('App was updated');
    });
  }
}
