import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ssr-any-name' }),
    BrowserTransferStateModule, // предзагрузить ajax чтобы не отправлять их с браузера повторно
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
