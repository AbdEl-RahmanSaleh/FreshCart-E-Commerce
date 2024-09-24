import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:any[], searchTerm:string): any[] {
    return products.filter((product)=>product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
