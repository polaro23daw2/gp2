import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'aplicacio',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{titol}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
      <button> <a class="nav-item nav-link active" routerLink="/salutacio" routerLinkActive="active">Salutacio </a></button>
      <button><a class="nav-item nav-link" routerLink="/suma" routerLinkActive="active">Suma</a></button>
      <button><a class="nav-item nav-link" routerLink="/intenerador" routerLinkActive="active">Intenerador</a></button>
      <button><a class="nav-item nav-link" routerLink="/contador" routerLinkActive="active">contador</a></button>
        
      </div>
    </div>
  </nav>
    <router-outlet></router-outlet>
  `
})
export class M11_EncaminamentComponent {
  titol = 'DAW2 demo de routing';
}