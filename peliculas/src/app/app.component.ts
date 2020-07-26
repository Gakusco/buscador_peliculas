import { Component, OnInit, OnChanges } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  respuesta = undefined;
  peliculas: Pelicula[];
  error = undefined;
  peliculasId: string[] = [];
  nombrePelicula: string;
  yearPelicula: string;

  pagina = '1';

  totalPeliculas: number;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.peliculas = [];
    this.peliculasId = [];
  }

  ngOnChanges() {
  }


  busqueda(indice: string, pelicula?: any){
    if (indice == '1' && pelicula) {
      this.peliculasService.getIdPeliculas(pelicula.titulo, pelicula.year, indice)
      .subscribe( (res: any) => {
                        this.nombrePelicula = pelicula.titulo;
                        this.yearPelicula = pelicula.year;

                        this.pagina = indice;
                        this.respuesta = res;
                        this.totalPeliculas = Number(res.totalResults);
                        this.peliculas = [];
                        this.peliculasId = [];
                        for (let i = 0; i < this.respuesta.Search.length; i++) {
                          this.peliculasId.push(this.respuesta.Search[i].imdbID);
                          console.log(this.respuesta.Search[i].imdbID);
                        }
                        console.log(this.respuesta);
                        if (res.Response) {
                          this.desplegar();
                        }
                          },
                  err => this.error = err
      );
    } else {
      this.peliculasService.getIdPeliculas(this.nombrePelicula, this.yearPelicula, indice)
      .subscribe( (res: any) => {

                        this.pagina = indice;
                        this.respuesta = res;
                        this.totalPeliculas = Number(res.totalResults);
                        this.peliculas = [];
                        this.peliculasId = [];
                        for (let i = 0; i < this.respuesta.Search.length; i++) {
                          this.peliculasId.push(this.respuesta.Search[i].imdbID);
                          console.log(this.respuesta.Search[i].imdbID);
                        }
                        console.log(this.respuesta);
                        if (res.Response) {
                          this.desplegar();
                        }
                          },
                  err => this.error = err
      );
    }
  }

  desplegar() {
    for (let i = 0; i < this.peliculasId.length; i++){
      this.peliculasService.getPeliculas(this.peliculasId[i])
      .subscribe( (res: any) => {
                          this.respuesta = res;
                          if (res.Ratings[1]){

                              this.peliculas.push({titulo: res.Title,
                                poster: res.Poster,
                                year: res.Year,
                                 pais: res.Country,
                                 genero: res.Genre,
                                 rating: res.Ratings[1].Value});



                          }else {
                            this.peliculas.push({titulo: res.Title,
                               poster: res.Poster,
                               year: res.Year,
                               pais: res.Country,
                               genero: res.Genre,
                               rating: ''});
                          }
                        },
                  err => this.error = err
      );
    }
  }

}

export interface Pelicula {
  titulo: string;
  poster: string;
  year: string;
  pais: string;
  genero: string;
  rating: string;
}
