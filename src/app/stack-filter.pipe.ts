import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stackFilter'
})
export class StackFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
