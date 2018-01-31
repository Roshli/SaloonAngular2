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

  public modle:Customer[];
  public modle2:Customer[];
  public formModle = new Customer();



  tpNumber2:number;

  constructor(private _customerService:CustomerService, private _router:Router ) {

  }
  onNameKeyUp(event:any)
  {
    this.tpNumber2 = event.target.value;

  }

  ngOnInit() {

    //this.modle = [{tpNumber:1111,name:"Shenal", age:24, email:"sjdhf",address:"shdfi"}];
    this._customerService.viewCustomers().subscribe((data:any[])=>{this.modle2= data; console.log(data)},(error)=>{console.log(error);})



  }


  getCustomer()
  {
    this._customerService.viewCustomer(this.tpNumber2).subscribe((data:any[])=>{this.modle= data},(error)=>{console.log(error);})
  }
  updateCustomer(k)
  {
    //console.log(modle);

      this._customerService.setter(this.modle2[k]);
      this._router.navigate(['/op']);
      console.log(this._customerService.getter().tpNumber)


  }
  getCustomers()
  {

  }
  form()
  {
    this._router.navigate(['/op']);
  }

 /* get CurrentCustomer(){
    return JSON.stringify(this.modle);
  }*/

}
