import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { M01_SalutacioComponent } from './m01-salutacio.component';
import { M02_SumaComponent } from './m02-suma.component';
import {M05_BindingsComponent, M05_CompteEnrera_Component } from './m05-bindings.component';
import { AppEncaminamentModule } from './app-encaminament.module';
import { M11_EncaminamentComponent } from './m11-encaminament.component';
import {ContadorComponent} from './contador.component';



@NgModule({
  declarations: [
    M01_SalutacioComponent,
    M02_SumaComponent,
    M05_BindingsComponent,
    M05_CompteEnrera_Component,
    M11_EncaminamentComponent,
    ContadorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppEncaminamentModule
  ],
  providers: [],
  bootstrap: [ContadorComponent ]
})
export class AppModule { }
