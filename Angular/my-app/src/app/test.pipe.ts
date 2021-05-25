import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './app.component';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: Person[], keyword: string): Person[] {
    //filter array here and return it
    return value.filter((item)=>item.firstName.includes(keyword));
  }

}
