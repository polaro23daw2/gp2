import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppEncaminamentModule } from './app-encaminament.module';
import { M11_EncaminamentComponent } from './m11-encaminament.component';
import {ContadorComponent} from './contador.component';
import {index} from './index.component';
import {buscador} from './buscador.component';
import {informacion} from './informacion.component';


@NgModule({
  declarations: [
    M11_EncaminamentComponent,
    index,
    ContadorComponent,
    buscador,
    informacion
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppEncaminamentModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [M11_EncaminamentComponent ]
})
export class AppModule { }
