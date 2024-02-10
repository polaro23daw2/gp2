import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'aplicacio',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h3>Nuestro sitio web de guerras</h3>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a id="index" class="nav-item nav-link btn" routerLink="/index" routerLinkActive="active">Home</a>
      <a id="contador" class="nav-item nav-link btn" routerLink="/contador" routerLinkActive="active">Contador</a>
      <a id="contador" class="nav-item nav-link btn" routerLink="/buscador" routerLinkActive="active">Buscador</a>
      <a id="contador" class="nav-item nav-link btn" routerLink="/informacion" routerLinkActive="active">Informacion</a>

    </div>
  </div>
</nav>
<router-outlet></router-outlet>
  `,
})
export class M11_EncaminamentComponent {
  titol = 'Aplicació de Guerres';
}