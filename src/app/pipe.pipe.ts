import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  // transform(value: moment.Moment, ...args: any[]): any {
   transform(value: string): string {
     return moment(value).fromNow();
  }

}
