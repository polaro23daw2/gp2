import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

// Definimos la interfaz Country dentro del mismo archivo para este ejemplo
interface Country {
  nombre: string;
  capital: string;
  idioma: string;
  poblacion: number;
  moneda: string;
  gentilicio: string;
}

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.html',
})
export class buscador implements OnInit {
  searchTerm: string = '';
  // Mejorando el tipado con la interfaz Country
  information: {[key: string]: Country} = {};
  filteredInformation: {[key: string]: Country} = {};
  searchPerformed: boolean = false; // Variable para rastrear si se ha realizado una búsqueda

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //aqui se cargan los datos de data.service
    this.loadData();
  }

  loadData(): void {
    // aqui se carga el archivo json que viene del archivo data.service
    this.dataService.GetJSON().subscribe((data: {[key: string]: Country}) => {
      this.information = data;
    });
  }

  search(): void {
    this.searchPerformed = true;
    this.filteredInformation = {};
    if (this.searchTerm) {
      const searchKey = this.searchTerm.toLowerCase();
      if (this.information.hasOwnProperty(searchKey)) {
        this.filteredInformation[searchKey] = this.information[searchKey];
      }
    }
  }

  hasResults(): boolean {
    return Object.keys(this.filteredInformation).length > 0;
  }

  isEmpty(): boolean {
    return Object.keys(this.filteredInformation).length === 0;
  }
}
