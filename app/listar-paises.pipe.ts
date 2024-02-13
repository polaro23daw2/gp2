import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listarPaises'
})
export class ListarPaisesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (args === 'países') {
      return Object.keys(value);
    }
    return [];
  }
}
