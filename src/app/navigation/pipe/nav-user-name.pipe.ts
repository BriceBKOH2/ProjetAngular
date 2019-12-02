import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navUserName'
})
export class NavUserNamePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return value;
  }
}
