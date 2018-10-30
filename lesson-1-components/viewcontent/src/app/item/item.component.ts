import {AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements AfterContentInit {
  @ContentChild('h') headerElement: HTMLElement;

  ngAfterContentInit() {
    console.log(this.headerElement);
  }
}
