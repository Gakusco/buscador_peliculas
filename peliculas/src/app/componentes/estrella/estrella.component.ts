import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.css']
})
export class EstrellaComponent implements OnInit{

  @Input() rating: string;
  ratingNumber: number;
  splitRating: string[];

  imagen: string;

  constructor() { }

  ngOnInit(): void {
    this.splitRating = this.rating.split('%');
    this.ratingNumber = parseInt(this.splitRating[0]);

    if (this.ratingNumber > 0 && this.ratingNumber <= 59){
      this.imagen = '../../assets/images/Rotten_Tomatoes_rotten.png';
    }else if (this.ratingNumber > 59 && this.ratingNumber <= 69){
      this.imagen = '../../assets/images/New_Fresh.png';
    }else if (this.ratingNumber > 70 && this.ratingNumber <= 100){
      this.imagen = '../../assets/images/Rotten_Tomatoes_Certified_Fresh_2018.png';
    }
  }

}
