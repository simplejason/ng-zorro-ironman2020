import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: moment.MomentInput, ...args: any[]): any {
    if (value) {
      return moment(value).fromNow();
    }
    return null;
  }

}
