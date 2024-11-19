import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tnpsc-online-coaching',
  templateUrl: './tnpsc-online-coaching.component.html',
  styleUrls: ['./tnpsc-online-coaching.component.scss']
})

export class TnpscOnlineCoachingComponent implements OnInit {

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
  this.titleService.setTitle('TNPSC Group 1 Online Coaching in Tamil Nadu- VerandaIAS');

  // Set the meta tags for the page
  this.metaService.addTags([
    { name: 'keywords', content: 'tnpsc group 1 online coaching, online coaching for tnpsc group 1, online class for tnpsc group 1, best online coaching for tnpsc group 1, tnpsc group 1 preparation online, digital learning for tamil nadu civil services, tnpsc group 1 online course, virtual classroom for tnpsc' },
    { name: 'description', content: 'Ace TNPSC Group 1 with our online coaching program in Tamil Nadu. Get expert guidance from the comfort of your home. Enroll now for success.' },
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
      vertical:"TNPSC-Group-I",
      formname:"IAS_General",
      language:"English",
      channel:"Online",
      category:"TNPSC-Group-I-Programme"
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
    'Live & Recorded Video Classes',
'Expert Star Faculties with distinct achievement in TNPSC Exams',
'Comprehensive coverage of the entire TNPSC syllabus',
'TNPSC Group 1 Study materials',
'Regular Mock Tests for Prelims & Mains',
'500+ Study Hours',
'150+ Mentorship Hours',
'BCT & ECT Explanation videos',
'Regular current affairs Sessions & Tests',

  ];

  services = [
    'Deputy Collector',
    'DSP (Category I)',
    'Asst. Commissioner',
    'Deputy Registrar',
    'Asst. Director (Rural Dev)',
   ' District Employment Officer',
    'District Officer'    
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
      answer: 'Online live classes for TNPSC coaching are virtual classroom learning sessions conducted in real-time by experienced faculties, specifically designed to prepare aspirants for the Tamil Nadu Public Service Commission (UPSC) examinations. These classes offer comprehensive coverage of the TNPSC syllabus, interactive discussions, and personalized guidance to maximize students` chances of success.',
      imageUrl: './assets/Coursepage/faq/faq-1.JPG'
    },
    {
      question: 'Are recorded videos of live classes available?',
      answer: 'Yes, we will provide you with recorded videos of all TNPSC live Online classes. In case if a student misses a live class he/she can watch the recorded video of the same.',
      imageUrl: './assets/Coursepage/faq/faq-2.png'
    },
    {
      question: 'Are there mentorship sessions available for this course?',
      answer: 'Yes, the TNPSC Group 1 Online Coaching Programme includes 150+ hours of free mentorship sessions. Apart from the mentorship sessions students can ask their doubts during their live class hours.',
      imageUrl: './assets/Coursepage/faq/faq-3.JPG'
    },
    {
      question: 'Are the test series available for both Prelims & Mains?',
      answer: 'Yes, we provide TNPSC Group 1 test series for students who enroll for online live classes. The test series is available for both Group 1 prelims & mains exam preparation. Explanation videos for the sessions will be provided after the completion of the tests.',
      imageUrl: './assets/Coursepage/faq/faq-4.JPG'
    },
    {
      question: 'What is co-scholastic learning?',
      answer: 'Co-scholastic experiences aid TNPSC Exam personality test preparation by honing communication, critical thinking, and leadership skills. They cultivate empathy, cultural awareness, and adaptability, fostering well-rounded candidates. Participation builds confidence, enhances self-expression, and prepares aspirants to navigate diverse challenges effectively, crucial for success in Tamil Nadu Civil Services.',
      imageUrl: './assets/Coursepage/faq/faq-5.JPG'
    },
    {
      question: 'Who can I contact for more information about the TNPSC Group 1 Online Coaching Programme?',
      answer: 'For further inquiries or clarifications regarding the TNPSC Group 1 Online Coaching Programme, please reach out to our dedicated support team on 8925521735. We`re here to assist you every step of the way!',
      imageUrl: './assets/Coursepage/faq/faq-6.JPG'
    }
  ];

}
