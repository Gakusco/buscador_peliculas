import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, fellback: string): string {
    let image;

    if(value != "N/A") {
      image = value;
    } else {
      image = fellback;
    }

    return image;
  }

}
