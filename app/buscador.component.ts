import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'; // Asegúrate de que la ruta de importación es correcta

// Definimos la interfaz Country dentro del mismo archivo para este ejemplo
interface Country {
  nombre: string;
  bandera: string;
  descripcio: string;
}

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.html',
})
export class buscador implements OnInit {
  searchTerm: string = '';
  information: {[key: string]: Country} = {};
  filteredInformation: {[key: string]: Country} = {};
  searchPerformed: boolean = false;
  applyTextShortening: boolean = false; // Variable para rastrear si se ha realizado una búsqueda

  constructor(private dataService: DataService) { }
  paises: any[] = []; // Tu lista de países a filtrar
  filtroPais: string = 'paises';
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
      // Cuando el usuario escribe "países", lista todos los países
      if (this.searchTerm.toLowerCase() === 'paises') {
        // Copia todas las entradas de information a filteredInformation
        this.filteredInformation = {...this.information};
      } else if (this.searchTerm) {
        // Filtra basado en el término de búsqueda específico
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
  toggleTextShortening(): void {
    this.applyTextShortening = !this.applyTextShortening;
  }
}
