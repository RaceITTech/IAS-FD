import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-webinar',
  templateUrl: './register-webinar.component.html',
  styleUrls: ['./register-webinar.component.scss']
})
export class RegisterWebinarComponent {

  submitClicked=false

  
  constructor(private http:HttpClient) { }

  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit(data: any) {
    this.submitClicked=true
    let obj = {
      "phonenumber":data.value.phoneNumber,
      "url": window.location.href
    }
    this.http.post("https://backend.verandarace.com/veranda/getiasDemoclass",obj).subscribe((data:any)=>{
      debugger
      if(data.success==true){
        window.location.href="https://zoom.us/j/96858326310?pwd=A0k7UCakVVnr9WXCJ0IDQfYRNYgayq.1"
      }
    })
  }

}
