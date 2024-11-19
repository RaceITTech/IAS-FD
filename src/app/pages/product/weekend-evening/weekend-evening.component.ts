import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-weekend-evening',
  templateUrl: './weekend-evening.component.html',
  styleUrls: ['./weekend-evening.component.scss']
})

export class WeekendEveningComponent {

  allStates:any
  states: any;
  currentState:any
  districtList: any;
  courseData:any
  groupId:any
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

constructor(private http:HttpClient, private crmApi:CrmApiService,private router:Router,private productService:ProductService){

  this.http.get('assets/states-and-districts.json').subscribe(data => {
    this.allStates = data;
    this.states = Array.from(new Set(this.allStates.map((item:any) => item.state)));
    console.log(this.allStates)
 
  });

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
      vertical:data.value.course,
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

products = [
  { name: 'Weekend Course', sku: 'VBN-IAS-CO-022', zohoId: '2476421000080631189', mode:'Online', duration:'1 Year', validity:'2 Years', fullFee:'75000' },
  { name: 'Evening Course ', sku: 'VBN-IAS-CO-024', zohoId: '2476421000080631207', mode:'Online', duration:'1 Year', validity:'2 Years', fullFee:'75000' },
];

courseSelected=false
courseFee=''


private loadCourseData(): void {
  this.productService.getProductDetails(this.groupId).subscribe({
    next: (value) => {
      this.courseData = this.productService.setCourseDetails(value);
      console.log("data",this.courseData)
    },
    error: (err) => {
      alert("Error loading page");
    }
  });
}

onBuyClick(): void {
  debugger
  this.router.navigateByUrl('/payment')
}

selectCourse(data:any){
  
  if(data.name=="Weekend Course")
  {
    this.groupId="GI008"
  }
  else{
    this.groupId="GI009"
  }
  this.loadCourseData();
  this.courseFee=data.fullFee
  this.courseSelected=true
}

  keyFeatures = [
    "Live + Recorded classes – Learn in your convenience",
    "Our extensively researched 12 handbooks to facilitate your preparation",
    "30 Hours free mentorship : Book your slots with faculties you like",
    "Complete CSAT Coverage",
    "Free monthly Current affairs classes",
    "Free Daily Test assessments",
    "Free Prelims and Mains Test series",
    "Free Optional subject orientations by expert faculties",
    "Course validity – 1.5 years "
  ];

  features = [
    {
      imgSrc: './assets/Coursepage/mentor-support-icon.png',
      title: 'Consistency in Preparation',
      description: 'On average, a UPSC aspirant spends around 2.5 years to clear the exam due to distractions and lack of consistency in prep work. ACSA will remove distractions to boost your consistency. At ACSA, you will have clear and specific goals and a curated routine, aiding you in clearing the UPSC exam.'
    },
    {
      imgSrc: './assets/Coursepage/faculty-icon.png',
      title: 'Extended Preparation Time',
      description: 'An aspirant easily loses 3-4 hours daily in travelling and other avoidable distractions. The aspirants gain these extra hours to prepare by attending the residential programme with 24/7 Mentorship support. It is to be noted that committing to time is one of the areas in which UPSC tests aspirants.'
    },
    {
      imgSrc: './assets/Coursepage/r&d-icon.png',
      title: 'Library & Study Hall',
      description: 'The UPSC curates the CSE from multiple sources, even for the same subject. The ACSA campus has a state-of-the-art facility which provides access to various sources to clear the exam. Study hall & Digital Library provide the perfect environment for revising what was taught in class and preparing notes from other sources.'
    },
    {
      imgSrc: './assets/Coursepage/online-exams-icon.png',
      title: 'Experts Support',
      description: '“The fastest way to get somewhere is to ask someone who’s already been there”. True to this quote, ACSA is filled with faculties who have cleared the Prelims and the Mains. Getting mentored by Mr U Sagayam and other former all-India Service officers will go a long way in moulding the aspirant\'s personality.'
    },
    {
      imgSrc: './assets/Coursepage/study-materials-icon.png',
      title: 'Service-ready Aspirant',
      description: 'Only one-third of aspirants who clear the mains end up becoming bureaucrats. The personality test is a huge task, and many don’t prepare much for it. At ACSA, apart from academics, we emphasise building the characters of the aspirants. This will help them ace the Interview and aid them in their service.'
    },
    {
      imgSrc: './assets/Coursepage/mock-interview-icon.png',
      title: 'Experience LBSNAA',
      description: 'The journey of an aspirant doesn’t end after making the merit list. It continues in LBSNAA until confirmation of the service. Just like in LBSNAA, you will experience peer group learning, a conducive learning environment, exploring real India and professional networking at the ACSA.'
    }
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
      question: 'Will students be provided with books?',
      answer: "Yes, students whoever enroll for this course will get 12 handbooks for the subjects: World History, Indian Polity, Modern Indian History, International Relations, Internal Security, Governance, Geography Ethics, Environment, Art & Culture, Ancient & Medieval Indian History, Indian Economy, Science and technology",
      imageUrl: './assets/Coursepage/faq/faq-6.JPG'
    },
    {
      question: 'Can students attend current affairs sessions once they enroll?',
      answer: 'Yes, enrolled students can attend current affairs sessions at regular intervals as per schedule.',
      imageUrl: './assets/Coursepage/faq/faq-7.JPG'
    }
  ]; 

}
