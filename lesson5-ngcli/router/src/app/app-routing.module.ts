import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyPreload } from './lazy/my-preload';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule', data: { nopreload: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: MyPreload })],
  exports: [RouterModule],
  providers: [MyPreload],
})
export class AppRoutingModule {
}
