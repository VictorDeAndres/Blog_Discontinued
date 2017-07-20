import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArrayValue'
})
export class ToArrayValuePipe implements PipeTransform {

  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push(value[key]);
    }
    return keys;
  }

}
