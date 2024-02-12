import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aplicacio',
  templateUrl: 'contador.html',
})
export class ContadorComponent implements OnInit {
  tiempoTranscurrido: string = '';
  mostrarDiv: boolean = false;
  animacionClase: string = '';
  
    ngOnInit() {
      this.iniciarContador();
    }
  
    iniciarContador() {
      setInterval(() => {
        this.calcularTiempoTranscurrido();
      }, 1000);
    }
  
    calcularTiempoTranscurrido(): void {
      const fechaInicio = new Date(2022, 1, 24); // Fecha de inicio de la guerra en Ucrania (24 de febrero de 2022)
      const fechaActual = new Date();
  
      const diferencia = fechaActual.getTime() - fechaInicio.getTime();
  
      const segundos = Math.floor(diferencia / 1000) % 60;
      const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
      const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)) % 365;
      const anos = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
  
      this.tiempoTranscurrido = `${anos} años, ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    }

    toggleDiv() {
      this.mostrarDiv = !this.mostrarDiv;
      this.animacionClase = this.mostrarDiv ? 'fade-in' : '';
    }
}