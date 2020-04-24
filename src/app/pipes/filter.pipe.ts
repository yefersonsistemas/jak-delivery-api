import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], text: string, column: string): any[] {
    // console.log('array desde el pipe', array);
    // if ( text === '' || text === undefined) {
    //   return array;
    // }

    // text = text.toString().toLowerCase();

    // return array.filter( item => {
    //   return item[column].toLowerCase().includes(text);
    // });

    if (!array) { return null; }
    if (!text) { return array; }

    text = text.toLowerCase();

    // tslint:disable-next-line: only-arrow-functions
    return array.filter( function( item: any ) {
      return JSON.stringify(item).toLowerCase().includes(text);
    });
  }
}
