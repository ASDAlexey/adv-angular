import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di';

  // @Inject(URL_TOKEN) base_url - удобно для useValue
  // constructor(userService: UserService, @Inject(URL_TOKEN) base_url) {
  constructor(public userService: UserService) {}
}
