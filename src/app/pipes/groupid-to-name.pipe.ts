import { Pipe, PipeTransform } from '@angular/core';
import { GenericObjectService } from '../services/generic-object.service'
@Pipe({
  name: 'groupIdToName'
})
export class GroupidToNamePipe implements PipeTransform {

  constructor(private gOS: GenericObjectService) { }

  transform(value: any, ...args: any[]): any {
    for (let obj of this.gOS.allObjects['group']) {
      if (obj.id === value) {
        return obj.name;
      }
    }
    return value;
  }
}
