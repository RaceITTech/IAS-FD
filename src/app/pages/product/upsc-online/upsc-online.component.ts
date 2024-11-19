import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upsc-online',
  templateUrl: './upsc-online.component.html',
  styleUrls: ['./upsc-online.component.scss']
})

export class UpscOnlineComponent implements OnInit {

  allStates:any
  states: any;
  currentState:any
  districtList: any;

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

constructor(private http:HttpClient, private crmApi:CrmApiService, private titleService: Title, private metaService: Meta){

  this.http.get('assets/states-and-districts.json').subscribe(data => {
    this.allStates = data;
    this.states = Array.from(new Set(this.allStates.map((item:any) => item.state)));
    console.log(this.allStates)
  });

}
  
ngOnInit(): void {
  // Set the title of the page
  this.titleService.setTitle('UPSC Online Coaching - Flexible, Expert-Led Classes - VerandaIAS');

  // Set the meta tags for the page
  this.metaService.addTags([
    { name: 'keywords', content: 'upsc online coaching, upsc training online, ias online coaching, upsc online classes, best online coaching for upsc, upsc preparation online, online ias preparation, upsc online course, digital learning for civil services' },
    { name: 'description', content: 'Join our UPSC online coaching for flexible, expert-led classes. Study from anywhere in India with top-rated coaching and guidance for UPSC exams.' },
  ]);
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
      vertical:"UPSC-Online",
      formname:"IAS_General",
      language:"English",
      channel:"Online",
      category:"UPSC-Online-Programme"
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

  keyFeatures = [
    "Live & Recorded Video Classes",
    "Expert Star Faculties with distinct UPSC achievement",
    "Comprehensive coverage of the entire UPSC syllabus",
    "Regular Mock Tests for Prelims & Mains",
    "Dream Catcher to get service-ready",
    "650+ Study Hours",
    "650+ Mentorship Hours",
    "BCT & ECT Explanation videos",
    "Online Diploma in Public Policy"
  ];

  faqs = [
    {
      question: 'What are Online live classes?',
      answer: 'Online live classes for UPSC coaching are virtual learning sessions conducted in real-time by experienced faculties, specifically designed to prepare aspirants for the Union Public Service Commission (UPSC) examinations. These classes offer comprehensive coverage of the UPSC syllabus, interactive discussions, and personalized guidance to maximize students\' chances of success.',
      imageUrl: './assets/Coursepage/faq/faq-1.JPG'
    },
    {
      question: 'Are recorded videos of live classes available?',
      answer: 'Yes, we will provide you with recorded videos of all live classes. In case if a student miss a live class he/she can watch the recorded video of the same.',
      imageUrl: './assets/Coursepage/faq/faq-2.png'
    },
    {
      question: 'Is there mentorship sessions available for this course?',
      answer: 'Yes, the programme includes residential facilities for aspirants. Comfortable accommodations for boys & girls separately are provided within the campus to ensure a conducive learning environment.',
      imageUrl: './assets/Coursepage/faq/faq-3.JPG'
    },
    {
      question: 'Is the test series available for both Prelims & Mains?',
      answer: 'Yes, we provide test series for students who enroll for online live classes. The test series is available for both prelims & mains exam preparation. Explanation videos for the sessions will be provided after the completion of the tests.',
      imageUrl: './assets/Coursepage/faq/faq-4.JPG'
    },
    {
      question: 'What is co-scholastic learning?',
      answer: 'Co-scholastic experiences aid UPSC personality test preparation by honing communication, critical thinking, and leadership skills. They cultivate empathy, cultural awareness, and adaptability, fostering well-rounded candidates. Participation builds confidence, enhances self-expression, and prepares aspirants to navigate diverse challenges effectively, crucial for success in civil services.',
      imageUrl: './assets/Coursepage/faq/faq-5.JPG'
    },
    {
      question: 'Will I get a Diploma in Public Policy?',
      answer: 'Yes, Candidates who complete the program will be awarded an online Diploma in Public Policy from a leading university in Chennai.',
      imageUrl: './assets/Coursepage/faq/faq-6.JPG'
    },
    {
      question: 'Who can I contact for more information about the UPSC Residential Programme?',
      answer: 'For further inquiries or clarifications regarding the UPSC Residential Programme, please reach out to our dedicated support team on 8925521735. We\'re here to assist you every step of the way!',
      imageUrl: './assets/Coursepage/faq/faq-7.JPG'
    }
  ]; 

}
