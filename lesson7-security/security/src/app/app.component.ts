import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'security';
  isPreloaderShowed$ = this.authService.isPreloaderShowed();

  constructor(private authService: AuthService) {

  }
}
