import { Pipe, PipeTransform, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';

@Pipe({
  name: 'searchMulti'
})
export class SearchMultiPipe implements PipeTransform {

  transform(items: any[], title: string, desciption: string, contract: string){
    if (items && items.length){
    return items.filter(item =>{
    if (title && item.title.toLowerCase().indexOf(title.toLowerCase()) === -1){
    return false;
    }
    if (desciption && item.description.toLowerCase().indexOf(desciption.toLowerCase()) === -1){
    return false;
    }
    if (contract && item.contract_type[0].toLowerCase().indexOf(contract.toLowerCase()) === -1){
    return false;
    }
    return true;
    })
    }
    else{
    return items;
    }
    }
}
