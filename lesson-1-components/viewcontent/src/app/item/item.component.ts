import {
  AfterContentInit, AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ContentChild,
  ContentChildren,
  ElementRef, OnInit,
  QueryList,
  ViewChild, ViewChildren, ViewContainerRef
} from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {Banner2Component} from '../banner2/banner2.component';
import {HostDirective} from '../host.directive';
import {NestedComponent} from '../nested/nested.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements AfterContentInit, AfterViewInit, OnInit {
  // @ContentChild('h') headerElement: ElementRef;
  // @ContentChild(NestedComponent) nestedComponent: NestedComponent;
  @ContentChildren(NestedComponent, {read: NestedComponent}) nestedComponent: QueryList<NestedComponent>;
  @ViewChild('s') viewSpan: ElementRef;

  // @ViewChildren

  @ViewChild(HostDirective) host: HostDirective;
  bannerComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this.addToHost();
  }

  clearHost() {
    this.host.view.clear();
  }

  addToHost() {
    // 1
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    this.host.view.createComponent(componentFactory);

    // easy way
    this.bannerComponent = BannerComponent;

    setTimeout(() => {
      this.bannerComponent = Banner2Component;
    }, 3000);
  }

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
