import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upsc-residential',
  templateUrl: './upsc-residential.component.html',
  styleUrls: ['./upsc-residential.component.scss']
})
export class UpscResidentialComponent implements OnInit {

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
  this.titleService.setTitle('UPSC Residential Program in Chennai - Top Coaching - VerandaIAS');

  // Set the meta tags for the page
  this.metaService.addTags([
    { name: 'keywords', content: 'upsc residential program chennai, upsc residential program, upsc residential program india, upsc residential program in india' },
    { name: 'description', content: 'Enroll in our UPSC residential program in Chennai for top-notch coaching, structured study plans, and complete support to clear your UPSC exams' },
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
      vertical:"UPSC-Residential",
      formname:"IAS_General",
      language:"English",
      channel:"Online",
      category:"UPSC-Residential-Programme"
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
    "India’s 1st Holistic Residential Programme for UPSC Prep.",
    "Spacious A/C classrooms, High-speed internet",
    "Expert Star Faculties with distinct UPSC achievement",
    "Bridge course & Comprehensive coverage of the entire UPSC syllabus",
    "Regular Mock Tests for Prelims & Mains",
    "Food & Accommodation are provided inside the campus",
    "Dream Catcher to get service-ready",
    "650+ Study Hours",
    "650+ Mentorship Hours"
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
      question: 'What is a Holistic Residential Programme?',
      answer: 'A holistic residential program offers a comprehensive curriculum, personalized mentoring, and a conducive learning environment to maximise candidates\' chances of success. With a dedicated focus on service readiness, a residential program is the perfect setting to master the skills and knowledge required to clear the most challenging exam. Additionally, we provide experiential learning, internship opportunities & physical education.',
      imageUrl: './assets/Coursepage/faq/faq-1.JPG'
    },
    {
      question: 'Who is eligible to apply for the UPSC Residential Programme?',
      answer: 'The programme is open to individuals who aspire to appear for the UPSC examinations, including the Civil Services Examination, Indian Forest Service Examination, and other allied services examinations.',
      imageUrl: './assets/Coursepage/faq/faq-2.png'
    },
    {
      question: 'Is accommodation provided as a part of the programme?',
      answer: 'Yes, the programme includes residential facilities for aspirants. Comfortable & separate accommodations for boys & girls are provided within the campus to ensure a conducive learning environment.',
      imageUrl: './assets/Coursepage/faq/faq-3.JPG'
    },
    {
      question: 'Is the test series available for both Prelims & Mains?',
      answer: 'Yes, we provide test series for students who enroll for residential programme. The test series is available for both prelims & mains exam preparation. Explanation sessions will be conducted after the completion of tests.',
      imageUrl: './assets/Coursepage/faq/faq-4.JPG'
    },
    {
      question: 'What is co-scholastic learning?',
      answer: 'Co-scholastic experiences aid UPSC personality test preparation by honing communication, critical thinking, and leadership skills. They cultivate empathy, cultural awareness, and adaptability, fostering well-rounded candidates. Participation builds confidence, enhances self-expression, and prepares aspirants to navigate diverse challenges effectively, crucial for success in civil services.',
      imageUrl: './assets/Coursepage/faq/faq-5.JPG'
    },
    {
      question: 'Will I get a Diploma in Public Policy?',
      answer: 'Yes, Candidates who complete the residential program will be awarded a Diploma in Public Policy from a leading university in Chennai.',
      imageUrl: './assets/Coursepage/faq/faq-6.JPG'
    },
    {
      question: 'Who can I contact for more information about the UPSC Residential Programme?',
      answer: 'For further inquiries or clarifications regarding the UPSC Residential Programme, please reach out to our dedicated support team on 8925521735. We\'re here to assist you every step of the way!',
      imageUrl: './assets/Coursepage/faq/faq-7.JPG'
    }
  ];

}
