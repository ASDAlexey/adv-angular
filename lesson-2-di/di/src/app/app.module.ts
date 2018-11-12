import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgZone, ReflectiveInjector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { ChildComponent } from './child/child.component';
import { NewComponent } from './new/new.component';
import { LogService } from './log.service';

const injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([UserService]);
const childInjector = injector.resolveAndCreateChild([UserService]);

// injector !== childInjector
// injector.get(UserService) !== injector.get(childInjector)

// Platform, Compiler, NgZone - ReflectiveInjector => StaticInjector
// Module, Component - not ReflectiveInjector

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NewComponent
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
    // UserService,
    // { provide: UserService, useClass: UserService, deps: [LogService] } // StaticInjector - чуть быстрее работает
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
