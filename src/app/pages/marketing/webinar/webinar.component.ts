import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrmApiService } from '../../../services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.scss']
})

export class WebinarComponent implements OnInit {
  ZBookAccessToken: any;
  leads: any
  state:any
  leaddata:any

  allStates:any
  states: any;
  currentState:any
  selectedDistrict=''
  districtList: any;

  submitClicked=false

  constructor(private http:HttpClient, private crmApi:CrmApiService) { 
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

    newZohoApi(data:any){
this.submitClicked=true
let obj={
  username:data.value.studentName,
  phone:'+91' + data.value.phoneNumber,
  email:data.value.emailID,
  vertical:"UPSC",
  formname:"IAS_Event",
  language:"English",
  state:data.value.state,
  district:data.value.district,
  channel:"Event",
  category:"Event",
  eventname:"UPSC Webinar",
  eventdate:"14/12/2024",
}
let url = window.location.href
const objdata=this.crmApi.getEventObj(obj,url)
this.crmApi.postCrm(objdata).subscribe((data:any)=>{
  if (data.success===true) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "we will reach out to you shortly"
    }).then((result) => {
    window.location.reload()
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please try again",
    }).then((result) => {
      window.location.reload()
      });
  }
   })
    }

    
}
