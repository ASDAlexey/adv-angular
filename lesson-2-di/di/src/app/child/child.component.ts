import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [UserService],
  viewProviders: [LogService], // доступ только у самого компонента но не у компонентов ставленных через ng-container <app-child><<app-new></app-child>
})
export class ChildComponent {
  constructor(public userService: UserService) {
  }
}
