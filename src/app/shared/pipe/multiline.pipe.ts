import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiline',
  standalone: true
})

export class MultilinePipe implements PipeTransform {

  transform(value: string): string[] {
    if (!value) {
      return [];
    }
    const items: string[] = value.split('#');
    const transformedList: string[] = [];

    for (const item of items) {
      // const subItems: string[] = item.split('~');
      transformedList.push( item);
    }

    return transformedList;
  }
}
