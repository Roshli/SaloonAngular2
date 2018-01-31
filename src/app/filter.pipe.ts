import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(customers: any, term: any): any {
    if (term === undefined)return customers;

    return customers.filter(function(customer){
      return customer.name.toLowerCase().includes(term.toLowerCase())
    })


  }

}
