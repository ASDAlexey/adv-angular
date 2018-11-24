import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'sw title nnn';

  constructor(private updates: SwUpdate, push: SwPush) {
    updates.available.subscribe(() => {
      alert('App was updated');
    });

    push.messages.subscribe((message)=>{
      // dialogue notification "message"
    });
  }
}
