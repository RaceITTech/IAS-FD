import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tnpsc-online',
  templateUrl: './tnpsc-online.component.html',
  styleUrls: ['./tnpsc-online.component.scss']
})
export class TnpscOnlineComponent implements OnInit {

  constructor(private http:HttpClient, private crmApi:CrmApiService,private titleService: Title, private metaService: Meta){ }

  ngOnInit(): void {
    // Set the title of the page
    this.titleService.setTitle('TNPSC Group 1 Online Coaching in Tamil Nadu- VerandaIAS');
  
    // Set the meta tags for the page
    this.metaService.addTags([
      { name: 'keywords', content: 'tnpsc group 1 online coaching, online coaching for tnpsc group 1, online class for tnpsc group 1, best online coaching for tnpsc group 1, tnpsc group 1 preparation online, digital learning for tamil nadu civil services, tnpsc group 1 online course, virtual classroom for tnpsc' },
      { name: 'description', content: 'Ace TNPSC Group 1 with our online coaching program in Tamil Nadu. Get expert guidance from the comfort of your home. Enroll now for success.' },
    ]);
  }

  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
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
      district:data.value.location,
      questions:data.value.questions,
      vertical:"TNPSC-GROUP-1",
      formname:"IAS_General",
      language:"English",
      channel:"Online",
      category:"Veranda IAS"
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

  posts = [
    {
      imgSrc: "../../../../assets/Marketing/tnpsc-online/tnpsc-lg.png",
      title: "Deputy Collector",
      description: "Tamil Nadu Civil Service"
    },
    {
      imgSrc: "../../../../assets/Marketing/tnpsc-online/tnpsc-lg.png",
      title: "DSP (Category I)",
      description: "Tamil Nadu Police Service"
    },
    {
      imgSrc: "../../../../assets/Marketing/tnpsc-online/tnpsc-lg.png",
      title: "Asst. Commissioner",
      description: "TN Commercial Taxes Service"
    },
    {
      imgSrc: "../../../../assets/Marketing/tnpsc-online/tnpsc-lg.png",
      title: "Deputy Registrar",
      description: "Tamil Nadu Cooperative Service"
    },
    {
      imgSrc: "../../../../assets/Marketing/tnpsc-online/tnpsc-lg.png",
      title: "Asst. Director (Rural Dev)",
      description: "TN Panchayat Development Services"
    },
    {
      imgSrc: "../../../../assets/Marketing/tnpsc-online/tnpsc-lg.png",
      title: "District Employment Officer",
      description: "Tamil Nadu General Services"
    },
    {
      imgSrc: "../../../../assets/Marketing/tnpsc-online/tnpsc-lg.png",
      title: "District Officer",
      description: "Tamil Nadu Fire Service"
    }
  ];

  items = [
    "4+2 months of coaching",
    "Live & Recorded Classes",
    "Bilingual classes & Tests - Tamil & English",
    "Comprehensive coverage of Prelims syllabus",
    "TNPSC Group 1 Study materials",
    "Comprehensive coverage of Mains syllabus",
    "Current Affairs coverage during class hours",
    "Regular current affairs Tests",
    "Basic & Extreme Circle Tests",
    "Super Batch - Prelims & Mains"
  ];

  results = [
    {
      title: "TNPSC Gr IV 2022",
      number: 428,
      subtitle: "Final Selections",
      description: "A testament to our top-class TNPSC Gr IV Exam coaching"
    },
    {
      title: "TNPSC Gr II & IIA 2022",
      number: "700+",
      subtitle: "Success Stories",
      description: "A testament to our top-class TNPSC Gr I Exam coaching"
    },
    {
      title: "TNUSRB SI 2023",
      number: 25,
      subtitle: "Final Selections",
      description: "A testament to our top-class TNUSRB SI Exam coaching"
    }
  ];

}
