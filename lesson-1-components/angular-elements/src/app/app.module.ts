import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [HelloComponent],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const helloElement = createCustomElement(HelloComponent, {injector: injector});
    customElements.define('my-hello', helloElement);
  }

  ngDoBootstrap() {
    // const helloElement = createCustomElement(HelloComponent, {injector: this.injector});
    // customElements.define('my-hello', helloElement);
  }
}
