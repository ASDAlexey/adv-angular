import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  // encapsulation: ViewEncapsulation.Native, // compile styles inside a component
})
export class HelloComponent {
  @Input() name: string;
  @Output() clicked = new EventEmitter<string>();

  xxx() {
    this.clicked.emit('CLICKED!');
  }
}
