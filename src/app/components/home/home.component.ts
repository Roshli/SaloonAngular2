import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../../shared-service/customer.service';
import { Router } from '@angular/router';
import {Customer} from "../../customer.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customer = new Customer();

  constructor(private _customerService:CustomerService, private _router:Router) { }

  ngOnInit() {
  }
  goToInsert()
  {
    this.customer = {tpNumber: null, name: "", age: null, address: "", email: ""};
    this._customerService.setter(this.customer);
    this._router.navigate(['/op']);
  }
  goToView()
  {
    this._router.navigate(['']);
  }

}
