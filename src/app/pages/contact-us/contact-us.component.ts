import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrmApiService } from '../../services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  allStates:any
  states: any;
  currentState:any
  selectedDistrict=''
  districtList: any;

  submitClicked=false

  constructor(private http:HttpClient) { 
    this.http.get('assets/states-and-districts.json').subscribe(data => {
      this.allStates = data;
      this.states = Array.from(new Set(this.allStates.map((item:any) => item.state)));
      console.log(this.allStates)
    });
  }

  ngOnInit(): void { }

  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  stateLanguage:any

  onStateChange(selectedState: string): void {
    this.selectedDistrict=''
    this.currentState = this.allStates.filter((item:any) => item.state === selectedState);
    this.stateLanguage = this.currentState[0].language
    this.districtList = this.currentState[0].districts
  }

  onContactSubmit(data: any) {
    this.submitClicked = true;
    console.log(data.value)
    const obj = {
      name: data.value.studentName,
      phonenumber: '+91' + data.value.phoneNumber,
      email: data.value.emailID,
      state: data.value.state,
      district: data.value.district,
      message: data.value.message,
    };
  
    // Disable the submit button during the API call
    this.http.post('https://backend.verandarace.com/veranda/iascontactus', obj).subscribe({
      next: (response: any) => {
        if (response.success === true) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "We will reach out to you shortly",
          }).then(() => {
            this.resetForm(data); // Reset the form instead of reloading
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please try again",
          });
        }
      },
      error: () => {
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: "Something went wrong. Please try again later.",
        });
      },
      complete: () => {
        this.submitClicked = false; // Re-enable the submit button
      },
    });
  }
  
  resetForm(data: any) {
    data.reset(); // Reset the form controls
    this.submitClicked = false;
  }
  

}
