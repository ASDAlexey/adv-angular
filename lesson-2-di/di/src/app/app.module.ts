import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LogService } from './log.service';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // { provide: AppComponent, useClass: AppComponent } -->   AppComponent
    // useClass/useValue/useFactory
    // {
    //   provide: UserService, useFactory: (logService) => {
    //     if (logService) {
    //       return new UserService();
    //     }
    //   }, deps: [LogService],
    // }

    // { provide: AdminService, useClass: AdminService },
    // { provide: UserService, useExisting: AdminService } // использовать UserService как AdminService но по interface не со всему методами
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
