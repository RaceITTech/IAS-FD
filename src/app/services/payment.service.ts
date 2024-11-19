import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private courseName!: string;
  private userRoute = environment.usersRoute
  private backendUrl = environment.backend
  private ordersRoute = environment.ordersRoute
  private paymentRoute = environment.paymentUrl
  private batchData: any;
  userselectBatch: any;
  constructor(private http:HttpClient,private productService : ProductService,private router:Router) { 
    
  }

  setCourseName(courseName: string): void {
    debugger
    this.courseName = courseName;
  }

  getCourseName(): string {
    return this.courseName;
  }

  addUser(url:string,data:any):Observable<any>{
    return  this.http.post(this.backendUrl+this.userRoute+url, data)
  }

  addOrder(url:string,data:any):Observable<any>{
    return  this.http.post(this.backendUrl+this.ordersRoute+url, data)
  }

  easyBuzPayment(orderObj: any,userData:any){
    debugger
    const myform = document.createElement('form');
    myform.method = 'POST';
    myform.action = `${this.backendUrl+this.paymentRoute}`;
    myform.style.display = 'none';
    myform.append('Content-Type', 'application/x-www-form-urlencoded');
    myform.append(
      'Accept',
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
    );
    myform.append('Authorization', 'this.orderObj');
    var orderId = document.createElement('input');
    orderId.setAttribute('type', 'text');
    orderId.setAttribute('name', 'txnid');
    orderId.setAttribute('value', orderObj.orderId);
    myform.appendChild(orderId);

    var amount = document.createElement('input');
    amount.setAttribute('type', 'text');
    amount.setAttribute('name', 'amount');
    amount.setAttribute('value', Number(orderObj.amount).toFixed(2));
    myform.appendChild(amount);

    var name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('name', 'name');
    name.setAttribute('value', orderObj.username);
    myform.appendChild(name);

    var email = document.createElement('input');
    email.setAttribute('type', 'text');
    email.setAttribute('name', 'email');
    email.setAttribute('value', orderObj.email);
    myform.appendChild(email);

    var phonenumber = document.createElement('input');
    phonenumber.setAttribute('type', 'text');
    phonenumber.setAttribute('name', 'phone');
    phonenumber.setAttribute('value', userData.phonenumber);
    myform.appendChild(phonenumber);

    var product = document.createElement('input');
    product.setAttribute('type', 'text');
    product.setAttribute('name', 'productinfo');
    product.setAttribute('value', orderObj.product);
    myform.appendChild(product);

    var successUrl = document.createElement('input');
    successUrl.setAttribute('type', 'text');
    successUrl.setAttribute('name', 'surl');
    successUrl.setAttribute(
      'value',
      `${this.backendUrl+this.ordersRoute}/thankyou`
    );
    myform.appendChild(successUrl);

    var address1 = document.createElement('input');
    address1.setAttribute('type', 'text');
    address1.setAttribute('name', 'address1');
    address1.setAttribute('value', '');
    myform.appendChild(address1);

    var address2 = document.createElement('input');
    address2.setAttribute('type', 'text');
    address2.setAttribute('name', 'address2');
    address2.setAttribute('value', '');
    myform.appendChild(address2);

    var city = document.createElement('input');
    city.setAttribute('type', 'text');
    city.setAttribute('name', 'city');
    city.setAttribute('value', '');
    myform.appendChild(city);

    var country = document.createElement('input');
    country.setAttribute('type', 'text');
    country.setAttribute('name', 'country');
    country.setAttribute('value', '');
    myform.appendChild(country);
    var customer_authentication_id = document.createElement('input');
    customer_authentication_id.setAttribute('type', 'text');
    customer_authentication_id.setAttribute(
      'name',
      'customer_authentication_id'
    );
    customer_authentication_id.setAttribute('value', '');
    myform.appendChild(customer_authentication_id);
    var split_payments = document.createElement('input');
    split_payments.setAttribute('type', 'text');
    split_payments.setAttribute('name', 'split_payments');
    split_payments.setAttribute('value', '');
    myform.appendChild(split_payments);
    var sub_merchant_id = document.createElement('input');
    sub_merchant_id.setAttribute('type', 'text');
    sub_merchant_id.setAttribute('name', 'sub_merchant_id');
    sub_merchant_id.setAttribute('value', '');
    myform.appendChild(sub_merchant_id);

    var unique_id = document.createElement('input');
    unique_id.setAttribute('type', 'text');
    unique_id.setAttribute('name', 'unique_id');
    unique_id.setAttribute('value', '');
    myform.appendChild(unique_id);
    var zipcode = document.createElement('input');
    zipcode.setAttribute('type', 'text');
    zipcode.setAttribute('name', 'zipcode');
    zipcode.setAttribute('value', '');
    myform.appendChild(zipcode);
    var furl = document.createElement('input');
    furl.setAttribute('type', 'text');
    furl.setAttribute('name', 'furl');
    furl.setAttribute(
      'value',
      `${this.backendUrl+this.ordersRoute}/failed`
    );
    myform.appendChild(furl);

    document.body.appendChild(myform);
    myform.submit();
  }
}
