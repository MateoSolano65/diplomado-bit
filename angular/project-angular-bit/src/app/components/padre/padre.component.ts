import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.scss',
})
export class PadreComponent {
  oidoDarth = '';
  vozDarth = '';

  escuchandoALuke(texto: string) {
    this.oidoDarth = texto;
  }

  hablandoConLuke() {
    this.vozDarth = 'Noooo Luke, Yo soy tu padre!!';
  }
}
