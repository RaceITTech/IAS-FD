import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrmApiService } from '../../services/zohoCrm/crm-api.service';

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

}
