import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss',
})
export class HijoComponent {
  @Input() oidoLuke = '';
  @Output() vozLuke = new EventEmitter<string>();

  Hablar() {
    this.vozLuke.emit('Tú mataste a mi padre!!');
  }
}
