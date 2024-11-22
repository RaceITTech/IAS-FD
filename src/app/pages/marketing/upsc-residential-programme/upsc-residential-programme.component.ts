import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upsc-residential-programme',
  templateUrl: './upsc-residential-programme.component.html',
  styleUrls: ['./upsc-residential-programme.component.scss']
})
export class UpscResidentialProgrammeComponent {

  allStates:any
  states: any;
  currentState:any
  districtList: any;

  constructor(private http:HttpClient, private crmApi:CrmApiService,private titleService: Title, private metaService: Meta){

    this.http.get('./assets/states-and-districts.json').subscribe(data => {
      this.allStates = data;
      this.states = Array.from(new Set(this.allStates.map((item:any) => item.state)));
      console.log(this.allStates)
    });
  
  }

  otpStatus=''
mobObj = {
  phonenumber: ''
};
sentotp:any
enteredOtp:any
otpVerified=false
otpResend=true

getOtp(data:any){
  this.mobObj = {
    phonenumber: data.value,
  }
  this.http.post('https://backend.raceinstitute.in/veranda/otp_verified', this.mobObj)
  .subscribe((response: any) => {
    if (response.otp) {
      this.sentotp = response.otp;
      this.otpStatus='Sent'
    }
  });
}
onInputChange(data: any) {
  this.enteredOtp=data
}

verifyOtp() {
  if (this.sentotp === this.enteredOtp) {
    this.otpStatus='Verified'
    this.otpVerified=true
  }
  else{
    this.otpStatus='inValid'
  }
}
resendOtp() {
  this.http.post('https://backend.raceinstitute.in/veranda/otp_verified', this.mobObj)
    .subscribe((response: any) => {
      if (response.otp) {
        this.otpResend=false
        this.sentotp = response.otp;
        this.otpStatus='reSent'
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

stateLanguage:any

onStateChange(selectedState: string): void {
  this.currentState = this.allStates.filter((item:any) => item.state === selectedState);
  this.stateLanguage = this.currentState[0].language
  this.districtList = this.currentState[0].districts
}

keyPress(event: any) {
  const pattern = /[0-9]/;
  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}

submitClicked=false

onSubmit(data:any){

  this.submitClicked=true

  let obj={
    username:data.value.student_Name,
    phone:'+91' + data.value.phone_Number,
    email:data.value.email_ID,
    state:data.value.state,
    district:data.value.district,
    // questions:data.value.questions,
    vertical:"UPSC",
    formname:"IAS_General",
    language:this.stateLanguage,
    channel:"Online",
    category:"Residential"
    }

    let url=window.location.href

    const objdata=this.crmApi.getGeneralObj(obj,url)

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

  typicaldata = [
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-1.webp',
      title: 'India’s first holistic UPSC Residential Programme'
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-2.webp',
      title: 'Spacious A/C classrooms, High speed internet'
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-3.webp',
      title: 'Regular UPSC Mock Tests for Prelims & Mains'
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-4.webp',
      title: 'Expert star mentors with distinct UPSC achievements'
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-5.webp',
      title: 'Holistic coverage of the entire UPSC syllabus'
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-6.webp',
      title: 'Free resources & study materials to keep you ahead'
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-7.webp',
      title: 'Part of highly competitive Super Batch programme'
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-8.webp',
      title: 'Dream catcher programme to get service-ready'
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-9.webp',
      title: '650+ Study Hours'
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-9.webp',
      title: '650+ Mentorship Hours'
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-10.webp',
      title: '1000+ Mock Tests '
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-11.webp',
      title: 'Batch for UPSC CSE 2024 starts from June 2024 '
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-12.webp',
      title: 'Comprehensive classes for GSPCM & Interview   '
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/typ-13.webp',
      title: '10 months of intense UPSC preparation without distractions'
    }
  ];

  libraryFacilities = [
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/lal.webp',
      title: 'Lal Bahadur Shastri Hall',
      points: [
       'LBS Hall is the name of a classroom for UPSC aspirants at the Brindhavan Campus. The classrooms are designed to regulate temperature and maintain a comfortable environment.  It creates an optimal learning atmosphere and improves overall academic performance'
      ]
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/library.webp',
      title: 'Library',
      points: [
        'An intellectual haven housing an extensive collection of books, journals, and research materials, providing quiet alcoves and study nooks for deep exploration and scholarly pursuits, fostering a culture of intellectual curiosity and academic excellence.'
      ]
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/digital.webp',
      title: ' Digital Library',
      points: [
        'An innovative online repository granting seamless access to a wealth of e-books, scholarly articles, and digital resources, empowering remote research and study endeavors with convenience and efficiency, bridging the gap between traditional and digital learning platforms.'
      ]
    },
    {
      imagePath: 'assets/Marketing/upsc-res-pro-lp/food.webp',
      title: 'High-quality nutritious food',
      points: [
        'We serve high-quality, nutritious food in the Brindhavan campus, which is vital to aspirants as it provides necessary nutrients and energy for their overall well-being and academic success. A balanced and nutritious diet helps to improve mental health, increase concentration and stamina, and reduce the risk of health issues.'
      ]
    }
  ];

}
