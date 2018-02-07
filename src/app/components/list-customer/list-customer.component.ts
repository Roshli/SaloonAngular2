import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../../shared-service/customer.service';
import { Customer } from '../../customer.model';
import { Router} from '@angular/router';
import { FilterPipe} from '../../filter.pipe';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  private page:number =0;
  public modle2:Customer[];
  private customers:Array<any>;
  private pages:Array<number>;



  tpNumber2:number;

  constructor(private _customerService:CustomerService, private _router:Router ) {

  }
  onNameKeyUp(event:any)
  {
    this.tpNumber2 = event.target.value;

  }
  setPage(i,event:any){

    event.preventDefault();
    this.page=i;
    this.getCustomers();
  }

  ngOnInit() {

      this.getCustomers();

  }
  getCustomers()
  {
    this._customerService.viewCustomers(this.page).subscribe(data=>{this.modle2=data['content'];this.pages = new Array(data['totalPages'])},(error)=>{console.log(error);})
  }

  updateCustomer(k)
  {
    //console.log(modle);

      this._customerService.setter(this.modle2[k]);
      this._router.navigate(['/op']);
      console.log(this._customerService.getter().tpNumber)


  }

  /*
 get CurrentCustomer(){
    return JSON.stringify(this.modle2);
  }
*/
}
