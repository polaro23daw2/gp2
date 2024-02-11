import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'aplicacio',
  templateUrl: 'index.html',
  styleUrls: ['../app/style.css'],
  animations: [
    trigger('resaltar', [
      state('normal', style({
        boxShadow: 'none'
      })),
      //sombra para el borde
      state('resaltado', style({
        boxShadow: '0 0 8px 2px rgba(127, 127, 235)'
      })),
      transition('normal <=> resaltado', animate('300ms ease-in'))
    ]),
    trigger('resaltarV2', [
      state('normal', style({
        boxShadow: 'none'
      })),
      //sombra para la parte incferior
      state('resaltadoV2', style({
        boxShadow: '0 -4px 8px 2px rgba(127, 127, 235)'
      })),
      transition('normal <=> resaltadoV2', animate('300ms ease-in'))
    ]),
trigger('resaltarV3', [
  state('normal', style({
    boxShadow: 'none',
    transform: 'scale(1)' // Estado normal, sin escala
  })),
  // Sombra para la parte superior y aumentar el tamaño un 10%
  state('resaltadoV3', style({
    boxShadow: '0 4px 8px 2px rgba(127, 127, 235)', // Añadido para mantener la sombra junto con el aumento
    transform: 'scale(1.3)' // Corregido para aumentar el tamaño en un 10%
  })),
  transition('normal <=> resaltadoV3', animate('500ms ease-in'))
])

  ]
})
export class index {
  estado: string = 'normal';
  estadoV2: string = 'normal';
  estadoV3: string = 'normal';

  toggleHighlight() {
    this.estado = this.estado === 'normal' ? 'resaltado' : 'normal';
  }

  toggleHighlightV2() {
    this.estadoV2 = this.estadoV2 === 'normal' ? 'resaltadoV2' : 'normal';
  }
  toggleHighlightV3() {
    this.estadoV3 = this.estadoV3 === 'normal' ? 'resaltadoV3' : 'normal';
  }
}
