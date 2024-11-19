import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slot-booking',
  templateUrl: './slot-booking.component.html',
  styleUrls: ['./slot-booking.component.scss']
})
export class SlotBookingComponent {

  private backendUrl = environment.backend
  private paymentRoute = environment.paymentUrl
  private ordersRoute = environment.ordersRoute

  currentStep = 1;

  courseData:any
  allStates:any
  allDistricts:any;

  constructor(private http:HttpClient){
    this.http.post('https://backend.verandaias.com/verandaias/product/getProductByGroup',{})
    .subscribe((response: any) => {
      this.courseData = response.getProduct
    });
    this.http.post('https://backend.raceinstitute.in/veranda/getStates',{})
    .subscribe((response: any) => {
      this.allStates = response.message.map((item:any) => {
        return {
            stateName: item._id.StateName,
            code: item._id.code
        };
    });
    });
  }

  keyPress(event: any) {
    const pattern = /[0-9 ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  showPhoneInput = true;

  mobObj = {
    phonenumber: ''
  };
  otpsent=false
  sentotp:any
  enteredOtp:any
  otpVerified=false
  otpInvalid=false
  otpResend=true

  getOtp(data:any){
    this.mobObj = {
      phonenumber: data.value,
    }
    this.http.post('https://backend.raceinstitute.in/veranda/otp_verified', this.mobObj)
    .subscribe((response: any) => {
      if (response.otp) {
        this.sentotp = response.otp;
        this.showPhoneInput=false
        this.otpsent=true
      }
    });
  }

  onInputChange(data: any) {
    this.enteredOtp=data
  }

  verifyOtp() {
    if (this.sentotp === this.enteredOtp) {
      this.formData.phonenumber = this.mobObj.phonenumber;
      this.otpVerified=true
      this.otpInvalid=false
      this.currentStep=2
    }
    else{
      this.otpInvalid=true
    }
  }
  resendOtp() {
    this.http.post('https://backend.raceinstitute.in/veranda/otp_verified', this.mobObj)
      .subscribe((response: any) => {
        if (response.otp) {
          this.otpResend=false
          this.otpInvalid=false
          this.sentotp = response.otp;
          this.otpsent=true
          setTimeout(() => {
            this.otpResend=true
          }, 60000);
        }
        else {
          setTimeout(() => { 
            this.otpResend = true
          }, 60000);
        }
      })
  }

  filteredCoursedata:any

  selectedCourse={
amount: "",
description: "",
discount:"",
groupId:"",
mode:"",
name:"",
samt:"",
sessions:"",
validity:"",
videos:"",
_id:""
}

  onCourseSelect(event:any){
    this.filteredCoursedata=this.courseData.filter((x:any)=>x.name==event.target.value)
    this.selectedCourse=this.filteredCoursedata[0]
    
  }

  onStateChange(event: any) {
    const selectedStateCode = event.target.value;
    this.fetchDistricts(selectedStateCode);
  }

  fetchDistricts(stateCode: string) {
    this.http.post('https://backend.raceinstitute.in/veranda/getDistricts', {"state": stateCode })
      .subscribe((response: any) => {
        this.allDistricts = response.message
      });
  }

  goToNextStep() {
    this.currentStep = 3;
  }

  selectedPrice: number | null = 5000;

  formData = {
    phonenumber: '',
    firstName: '',
    lastName: '',
    emailId:'',
    course:'',
    dob:'',
    gender:'',
    address:'',
    pinCode:'',
    state:'',
    district:'',
    initialAmount: this.selectedPrice
  };

  onCheckboxChange(price: number) {
    this.selectedPrice = this.selectedPrice === price ? null : price;
    this.formData.initialAmount=this.selectedPrice
  }

  responseOrderId:any

  addOrder(){
    let orderObj = {
  email: this.formData.emailId,
  phonenumber: this.formData.phonenumber,
  username: `${this.formData.firstName} ${this.formData.lastName}`,
  product: this.formData.course,
  Gender: this.formData.gender,
  DOB: this.formData.dob,
  mode: this.selectedCourse.mode,
  amount: this.formData.initialAmount,
  address: this.formData.address,
  city: this.formData.district,
  state: this.formData.state,
  pincode: this.formData.pinCode,
  OrderDate: new Date().toISOString().slice(0, 10)
    }
    console.log(orderObj)
    this.http.post('https://backend.verandaias.com/verandaias/orders/addPayOrder',orderObj)
      .subscribe((response: any) => {
        this.responseOrderId=response.order.orderId
        this.easyBuzPayment(orderObj,this.responseOrderId)
      });
  } 
  
  easyBuzPayment(orderObj: any,responseOrderId:any){

    console.log(orderObj,responseOrderId);
    

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
    orderId.setAttribute('value', responseOrderId);
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
    phonenumber.setAttribute('value', orderObj.phonenumber);
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
      `${this.backendUrl+this.ordersRoute}/ias_success`
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
      `${this.backendUrl+this.ordersRoute}/ias_failed`
    );
    myform.appendChild(furl);

    document.body.appendChild(myform);
    myform.submit();
  }

}
