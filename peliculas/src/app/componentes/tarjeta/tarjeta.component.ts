import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../app.component';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() pelicula: Pelicula;

  constructor() { }

  ngOnInit(): void {
    
  }

}
