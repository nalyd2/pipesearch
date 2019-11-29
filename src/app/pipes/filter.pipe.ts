import { Pipe, PipeTransform } from '@angular/core';
import { Key } from 'protractor';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, args: any[]): any {
  //   return null;
  // }

  transform(value: any, nom: any, region: any, estacion: any): any {
    /*  for(const post of value){
        
       // if(post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        if(post.nombre.toLowerCase().indexOf(nom.toLowerCase()) > -1){
          result.push(post)
        }
      }
      return result;
  */
    const filterCombiner = (d, filterArray) => {
      for (let fn of filterArray) {
        if (!fn(d)) {
          return false;
        }
      }
      return true;
    }
    const filterArray = [
      d => !d.nombre.toLowerCase().indexOf(nom.toLowerCase()),
      d => !d.region.toLowerCase().indexOf(region.toLowerCase()),
      d => !d.estacion.toLowerCase().indexOf(estacion.toLowerCase()),
    ];
    value = value.filter(d => filterCombiner(d, filterArray));
    return value;
  }
}
