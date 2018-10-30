import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[colory]',
  exportAs: 'colory'
})
export class ColoryDirective {
  @HostBinding('style.color') myColor = 'red';

  changeColor(color: string) {
    this.myColor = color;
  }
}
