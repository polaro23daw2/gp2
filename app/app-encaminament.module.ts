import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContadorComponent } from './contador.component';
import { index } from './index.component';
import { buscador } from './buscador.component';
import { informacion } from './informacion.component';

const encaminaments: Routes = [
  { path: 'contador', component: ContadorComponent },
  { path: 'index', component: index },
  { path: 'buscador', component: buscador },
  { path: 'informacion', component: informacion }
  

];

@NgModule({
  imports: [RouterModule.forRoot(encaminaments)],
  exports: [RouterModule]
})
export class AppEncaminamentModule { }