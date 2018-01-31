import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable} from "rxjs/Observable";
import {Customer} from "../customer.model";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomerService {
  private baseUrl:string = 'http://localhost:8080/customer';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private customer:Customer;
  constructor(private _http:Http){}

//  constructor() { }
  viewCustomer(tpNumber:Number){
    return this._http.get(this.baseUrl+'/'+tpNumber,this.options).map((response:Response)=>response.json()).catch(this.errorHandler)
  }

  viewCustomers()
  {
    return this._http.get(this.baseUrl+'/Customers',this.options).map((response:Response)=>response.json()).catch(this.errorHandler)
  }

  insertCustomer(customer:Customer){
    return this._http.post(this.baseUrl,JSON.stringify(customer) ,this.options).map((response:Response)=>response.json()).catch(this.errorHandler)
  }

  updateCustomer(customer:Customer){
    return this._http.put(this.baseUrl,JSON.stringify(customer), this.options).map((response:Response)=>response.json()).catch(this.errorHandler)
  }


  errorHandler(error:Response)
  {
      return Observable.throw(error||"SERVER ERROR");
  }
  setter(customer:Customer)
  {
    this.customer = customer;
  }
  getter()
  {
    return this.customer;
  }

}
