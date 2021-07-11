import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneRo'
})
export class RoPipe implements PipeTransform {

  transform(num: string) {
    num = "+40"+ num;
    const prefix = num.slice(0,3);
    const primele3cife = num.slice(3,6);
    const cifreledinmijloc = num.slice(6,9);
    const ultimelecifre = num.slice(9);

    return `${prefix} (${primele3cife}) ${cifreledinmijloc}-${ultimelecifre}`; 
  }

}
