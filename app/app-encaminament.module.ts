import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { M01_SalutacioComponent } from './m01-salutacio.component';
import { M02_SumaComponent } from './m02-suma.component';
import { M05_BindingsComponent } from 'src/app/m05-bindings.component';
import { ContadorComponent } from 'src/app/contador.component';

const encaminaments: Routes = [
  { path: '', redirectTo: '/salutacio', pathMatch: 'full' },
  { path: 'salutacio', component: M01_SalutacioComponent },
  { path: 'suma', component: M02_SumaComponent },
  { path: 'intenerador', component:M05_BindingsComponent },
  { path: 'contador', component: ContadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(encaminaments)],
  exports: [RouterModule]
})
export class AppEncaminamentModule { }