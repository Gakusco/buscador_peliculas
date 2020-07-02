import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  titulo: HTMLElement;
  year: HTMLElement;
  errorTitulo: HTMLElement;
  errorYear: HTMLElement;
  parrafo: HTMLElement;


  @Output() enviarBusqueda = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {
    this.titulo = document.getElementById('titulo');
    this.year = document.getElementById('year');
    this.errorTitulo = document.createElement('div');
    this.errorTitulo.className = 'invalid-feedback';
    this.errorTitulo.setAttribute('idTitulo', 'errorTemporal');
    this.errorYear = document.createElement('div');
    this.errorYear.className = 'invalid-feedback';
    this.errorYear.setAttribute('idYear', 'errorTemporal');
    this.titulo.parentElement.appendChild(this.errorTitulo);
    this.year.parentElement.appendChild(this.errorYear);
  }

  buscarPeliculas (tituloPelicula: string, yearPelicula: string) {
    if (tituloPelicula == '' || (parseInt(yearPelicula) < 1800 || parseInt(yearPelicula) > 2030)){
      if (tituloPelicula == ''){
        this.titulo.className = 'form-control is-invalid animate__animated animate__shakeX animate__faster';
        this.errorTitulo.textContent = 'Debe ingresar un título.';
      }
      if (parseInt(yearPelicula) < 1800 || parseInt(yearPelicula) > 2030){
        this.year.className = 'form-control is-invalid animate__animated animate__shakeX animate__faster';
        this.errorYear.textContent = 'Debe ingresar un año correcto.';
      }
    }else{
      this.titulo.className = 'form-control';
      this.year.className = 'form-control';
      this.errorTitulo.textContent = '';
      this.errorYear.textContent = '';
      this.enviarBusqueda.emit({titulo: tituloPelicula, year: yearPelicula});
    }
  }
}
