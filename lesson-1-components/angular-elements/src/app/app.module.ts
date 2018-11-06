import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';
import {HelloComponent} from './hello/hello.component';

@NgModule({
  declarations: [
    HelloComponet
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [HelloComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const helloElement = createCustomElement(HelloComponent, {injector: this.injector});
    customElements.define('my-hello', helloElement);
  }
}
