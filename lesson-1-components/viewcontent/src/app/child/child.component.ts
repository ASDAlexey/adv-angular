import {Attribute, Component, OnInit} from '@angular/core';
import {ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // лучше использовать @Attribute('type') вместо @input() type для статических аттрибутб тк changeDetection не будет в этом случае проверять атрибут
  constructor(@Attribute('type') public type = 'advanced') {
    console.log(this.type);
  }
}
