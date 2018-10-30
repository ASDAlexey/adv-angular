import {
  AfterContentInit, AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild, ViewChildren
} from '@angular/core';
import {NestedComponent} from '../nested/nested.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements AfterContentInit, AfterViewInit {
  // @ContentChild('h') headerElement: ElementRef;
  // @ContentChild(NestedComponent) nestedComponent: NestedComponent;
  @ContentChildren(NestedComponent, {read: NestedComponent}) nestedComponent: QueryList<NestedComponent>;
  @ViewChild('s') viewSpan: ElementRef;

  // @ViewChildren

  ngAfterContentInit() {
    // console.log(this.headerElement.nativeElement);
    // this.nestedComponent.doSomething();
    // console.log(this.nestedComponent);
    console.log('ngAfterContentInit');
    const a = 5;
    const b = 7;
    const c = a + b;
    // console.log(a + b);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.viewSpan);
  }
}
