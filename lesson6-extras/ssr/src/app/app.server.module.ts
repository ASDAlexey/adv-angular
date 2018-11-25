import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule, // подгрузить модули которые lazy для сервера
    ServerTransferStateModule, // предзагрузить ajax чтобы не отправлять их с браузера повторно
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
