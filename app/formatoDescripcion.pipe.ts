import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoDescripcion'
})
export class FormatoDescripcionPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.trim().substring(0, 150) + '...'; 
  }
}
