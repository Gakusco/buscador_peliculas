import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  key: string = '24f56ca4';
  URI: string;

  constructor(private http: HttpClient) { }

  getPeliculas(id: string){
    return this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=${this.key}`);
  }

  getIdPeliculas(nombre: string, year: string, pagina: string) {
    return this.http.get(`http://www.omdbapi.com/?apikey=${this.key}&page=${pagina}&type=movie&s=${nombre}&y=${year}`);
  }
}
