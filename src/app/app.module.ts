 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CustomerService} from './shared-service/customer.service';
import {RouterModule, Routes} from "@angular/router";

 import { AppComponent } from './app.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { HomeComponent } from './components/home/home.component';
import { FilterPipe } from './filter.pipe';

const appRoutes:Routes=[
  {path:'', component:ListCustomerComponent},
  {path:'op', component:CustomerFormComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    ListCustomerComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
