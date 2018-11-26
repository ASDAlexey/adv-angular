import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'security';
  isPreloaderShowed$ = this.authService.isPreloaderShowed();

  constructor(private authService: AuthService, private sanitizer: DomSanitizer) {
    // написать свою проверку url на domain, ...
    // sanitizer.bypassSecurityTrustUrl(url);
  }
}
