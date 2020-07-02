import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.css']
})
export class EstrellaComponent implements OnInit, OnChanges{

  @Input() rating: string;
  stars: number;
  arr: any = new Array(this.stars).fill(1);
  ratingNumber: number;
  splitRating: string[];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.splitRating = this.rating.split('%');
    this.ratingNumber = parseInt(this.splitRating[0]);

    if (this.ratingNumber > 0 && this.ratingNumber <= 20){
      this.stars = 1;
    }else if (this.ratingNumber > 20 && this.ratingNumber <= 40){
      this.stars = 2;
    }else if (this.ratingNumber > 40 && this.ratingNumber <= 60){
      this.stars = 3;
    }else if (this.ratingNumber > 60 && this.ratingNumber <= 80){
      this.stars = 4;
    }else if (this.ratingNumber > 80 && this.ratingNumber <= 100){
      this.stars = 5;
    }

    this.arr = new Array(this.stars).fill(1);
  }

}
