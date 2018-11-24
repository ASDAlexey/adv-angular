import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ivy';
}


// main.ts
/*import * as core from '@angular/core';

export class AppComponent {
  title = 'ivy';

  static ngComponentDef = core.ɵdefineComponent({
    type: AppComponent,
    selectors: [['app-root']],
    factory: () => new AppComponent(),
    template: (renderFlags: core.ɵRenderFlags, ctx: AppComponent) => {
      core.ɵE(0, 'p');
      core.ɵT(1, 'Hello Angular');
      core.ɵe();
    },
  });
}

core.ɵrenderComponent(AppComponent);*/
