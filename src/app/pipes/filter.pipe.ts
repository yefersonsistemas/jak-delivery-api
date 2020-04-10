import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], text: string, column: string): any[] {
    console.log('array desde el pipe', array);
    if ( text === '' ) {
      return array;
    }

    text = text.toLowerCase();

    return array.filter( item => {
      return item[column].toLowerCase()
              .include(text);
    });


  }

}
