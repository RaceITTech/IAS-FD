import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})

export class PaymentPageComponent {

  RAZORPAY_OPTIONS: any;
  oId: any;
  userData: any;
  orderData: any;
  razorpay_payment_id: any;
  f: any;
  phonenumber: any;
  courseData!: any;
  state!:string
  currentDate!:any
  expiryDate!:any

  constructor(private productService:ProductService,private paymentService: PaymentService,private router:Router) {   
  var d = this.courseData  = this.productService.getCourseDetails() 
  if(!d.courseId||!d.product){
    this.router.navigateByUrl('/')
  }
    console.log("paymentData",d);
  }

  onsub(data: any) {
    this.f = data
    if(this.f==data){
      this.pay()
    }
  }
  pay() {
    this.onsubmit(this.f)
  }
  onsubmit(data: any) {
    var obj = {
      username: data.value.name,
      email: data.value.email,
      phonenumber: data.value.phonenumber
    }

    var userData = data.value

    this.paymentService.addUser('/userRegister', obj)
      .subscribe((data: any) => {
        
        var orderObj = this.getorderData(userData)
        this.paymentService.addOrder('/addOrder', orderObj)
          .subscribe((data: any) => {
            debugger
            orderObj.orderId=data.orderId
            this.paymentService.easyBuzPayment(orderObj,obj)
          })

      })
  }

  getorderData(userData: any) {
    if (userData.state == 'Tamil Nadu') {
      this.state = 'TN';
    } else if (userData.state == 'Andhra Pradesh') {
     this.state= 'AD';

    } else if (userData.state == 'Arunachal Pradesh') {
      this.state = 'AR';
      
    } else if (userData.state == 'Assam') {
      this.state = 'AS';
     
    } else if (userData.state == 'Bihar') {
      this.state = 'BR';
    } else if (userData.state == 'Chattisgarh') {
      this.state = 'CH';
      
    } else if (userData.state == 'Delhi') {
      this.state = 'DL';
      
    } else if (userData.state == 'Goa') {
      this.state = 'GA';
    
    } else if (userData.state == 'Gujarat') {
      this.state = 'GJ';
      
    } else if (userData.state == 'Haryana') {
      this.state = 'HR';
      
    } else if (userData.state == 'Himachal Pradesh') {
      this.state = 'HP';
     
    } else if (userData.state == 'Jammu and Kashmir') {
      this.state = 'JK';
      
    } else if (userData.state == 'Jharkhand') {
      this.state = 'JH';
    } else if (userData.state == 'Karnataka') {
      this.state = 'KA';
      
    } else if (userData.state == 'Kerala') {
      this.state = 'KL';
    
    } else if (userData.state == 'lakshadweep Islands') {
      this.state = 'LD';
     
    } else if (userData.state == 'Madhya Pradesh') {
      this.state = 'MP';
      
    } else if (userData.state == 'Maharashtra') {
      this.state = 'MH';
      
    } else if (userData.state == 'Manipur') {
      this.state = 'MN';
     
    } else if (userData.state == 'Meghalaya') {
      this.state = 'ML';
   
    } else if (userData.state == 'Mizoram') {
      this.state = 'MZ';
      
    } else if (userData.state == 'Nagaland') {
      this.state = 'NL';
    
    } else if (userData.state == 'Odisha') {
      this.state = 'OD';
     
    } else if (userData.state == 'Andhra Pradesh') {
      this.state = 'AD';
     
    } else if (userData.state == 'Pondicherry') {
      this.state = 'PY';
    
    } else if (userData.state == 'Punjab') {
      this.state = 'PB';
      
    } else if (userData.state == 'Rajasthan') {
      this.state = 'RJ';
      
    } else if (userData.state == 'Sikkim') {
      this.state = 'SK';
     
    } else if (userData.state == 'Telangana') {
      this.state = 'TS';
     
    } else if (userData.state == 'Tripura') {
      this.state = 'TR';
  
    } else if (userData.state == 'Uttar Pradesh') {
      this.state = 'UP';
      
    } else if (userData.state == 'Uttarakhand') {
      this.state = 'UK';
  
    } else if (userData.state == 'West Bengal') {
      this.state = 'WB';
    
    } else if (userData.state == 'Andaman and Nicobar Islands') {
      this.state = 'AN';
      
    }
    if(this.courseData.productId=="64c8eb0b79c9cad3e7853126" ||this.courseData.productId=="64c8ebe579c9cad3e7853127" )
    {
      const currentDate = new Date();
      const oneYearLater = new Date(currentDate);
      oneYearLater.setFullYear(currentDate.getFullYear() + 1);
           this.currentDate = this.formatDateString(currentDate);
          const expdate = this.formatDateString(oneYearLater);
          const [year, month, day] = expdate.split('-');
           this.expiryDate = `${day}-${month}-${year}`;
    }
    else{
      debugger
      const currentDate = new Date();
      const oneYearLater = new Date(currentDate);
      oneYearLater.setFullYear(currentDate.getMonth() + 6);
           this.currentDate = this.formatDateString(currentDate);
          const expdate = this.formatDateString(oneYearLater);
          const [year, month, day] = expdate.split('-');
           this.expiryDate = `${day}-${month}-${year}`;
    }

    debugger
    return {
      username: userData.name.trim(),
      vertical: "VERANDA-IAS",
      product: this.courseData.product,
      productId:this.courseData.productId,
      productBatch:this.courseData.batch,
      zohoBatchDate:this.currentDate,
      expiryDate:this.expiryDate,
      amount: Number(this.courseData.totalAmount.replace(/,/g, '')),
      email: userData.email,
      phonenumber: '+91' + userData.phonenumber,
      ordernotes: "",
      addressline1: userData.address1,
      addressline2: userData.address2,
      city: userData.district,
      branch: userData.district,
      state: this.state,
      pincode: userData.pincode,
      payment_gate: "easebuzz",
      orderId:"",
      zohoItemId:this.courseData.zohoItemId
       };
  }


  keyPress(event: any) {
    const pattern = /[0-9 ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

   formatDateString (date:any)  {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

}
