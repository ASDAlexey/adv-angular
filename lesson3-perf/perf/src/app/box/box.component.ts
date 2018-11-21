import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: '[box]',
  template: `
    <svg:rect
      #b
      [attr.dataId]="box.id"
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="20"
      height="20"
      stroke="black"
      [attr.fill]="selected ? 'red' : 'transparent'"
      strokeWidth="1"
    ></svg:rect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent implements AfterViewInit {
  @Input() box;
  @Input() selected;

  constructor(private cd: ChangeDetectorRef) {}

  @ViewChild('b')
  set b(el: ElementRef) {
    if (el) {
      el.nativeElement['BoxComponent'] = this;
    }
  }

  ngAfterViewInit(): void {
    this.cd.detach();
  }

  update() {
    this.cd.detectChanges();
  }
}
