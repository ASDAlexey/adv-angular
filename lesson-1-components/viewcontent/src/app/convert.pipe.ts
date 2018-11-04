import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convert',
  pure: true,
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('ConvertPipe');
    return value;
  }
}
