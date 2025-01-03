import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-upsc-prelims',
  templateUrl: './upsc-prelims.component.html',
  styleUrls: ['./upsc-prelims.component.scss'],
})
export class UpscPrelimsComponent {
  allStates: any;
  states: any;
  currentState: any;
  districtList: any;

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(
    private http: HttpClient,
    private crmApi: CrmApiService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.http.get('./assets/states-and-districts.json').subscribe((data) => {
      this.allStates = data;
      this.states = Array.from(
        new Set(this.allStates.map((item: any) => item.state))
      );
      console.log(this.allStates);
    });
  }

  ngOnInit(): void {
    // Set the title of the page
    this.titleService.setTitle(
      'Weekend UPSC Coaching - Flexible Learning in India - VerandaIAS program'
    );

    // Set the meta tags for the page
    this.metaService.addTags([
      {
        name: 'keywords',
        content:
          'weekend batch for upsc, upsc weekend classes, weekend classes for upsc, weekend coaching for upsc, weekend upsc online classes, weekend online classes for upsc, weekend online coaching for upsc, best weekend batch for upsc online, upsc preparation on weekends online, part-time upsc coaching online, flexible upsc study program online, upsc classes for working professionals online',
      },
      {
        name: 'description',
        content:
          'Join our weekend batch for UPSC coaching in India. Flexible schedules and expert guidance tailored for working professionals. Sign up today.',
      },
    ]);
  }

  otpStatus = '';
  mobObj = {
    phonenumber: '',
  };
  sentotp: any;
  enteredOtp: any;
  otpVerified = false;
  otpResend = true;

  getOtp(data: any) {
    this.mobObj = {
      phonenumber: data.value,
    };
    this.http
      .post(
        'https://backend.raceinstitute.in/veranda/otp_verified',
        this.mobObj
      )
      .subscribe((response: any) => {
        if (response.otp) {
          this.sentotp = response.otp;
          this.otpStatus = 'Sent';
        }
      });
  }
  onInputChange(data: any) {
    this.enteredOtp = data;
  }

  verifyOtp() {
    if (this.sentotp === this.enteredOtp) {
      this.otpStatus = 'Verified';
      this.otpVerified = true;
    } else {
      this.otpStatus = 'inValid';
    }
  }
  resendOtp() {
    this.http
      .post(
        'https://backend.raceinstitute.in/veranda/otp_verified',
        this.mobObj
      )
      .subscribe((response: any) => {
        if (response.otp) {
          this.otpResend = false;
          this.sentotp = response.otp;
          this.otpStatus = 'reSent';
          setTimeout(() => {
            this.otpResend = true;
          }, 60000);
        } else {
          setTimeout(() => {
            this.otpResend = true;
          }, 60000);
        }
      });
  }

  stateLanguage: any;

  onStateChange(selectedState: string): void {
    this.currentState = this.allStates.filter(
      (item: any) => item.state === selectedState
    );
    this.stateLanguage = this.currentState[0].language;
    this.districtList = this.currentState[0].districts;
  }

  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  submitClicked = false;

  onSubmit(data: any) {
    this.submitClicked = true;

    let obj = {
      username: data.value.student_Name,
      phone: '+91' + data.value.phone_Number,
      email: data.value.email_ID,
      state: data.value.state,
      district: data.value.district,
      questions: data.value.questions,
      vertical: data.value.batch,
      formname: 'IAS_General',
      language: this.stateLanguage,
      channel: 'Online',
      category: 'UPSC-Weekend-Online',
    };

    let url = window.location.href;

    const objdata = this.crmApi.getGeneralObj(obj, url);

    this.crmApi.postCrm(objdata).subscribe((data: any) => {
      if (data.success === true) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'we will reach out to you shortly',
        }).then((result) => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please try again',
        }).then((result) => {
          window.location.reload();
        });
      }
    });
  }

  whydata = [
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-1.png',
      description: 'Live + Recorded classes ',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-2.png',
      description: '270+ Hours of Classes',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-3.png',
      description: 'Pool of 100+ academic experts from all over Bharat',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-4.png',
      description: 'Dedicated Mentorship sessions',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-5.png',
      description:
        'Our extensively researched 12 handbooks to facilitate your preparation ',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-6.png',
      description: 'Coverage of All Prelims GS subjects',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-7.png',
      description: 'Focused Current Affairs Sessions ',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-8.png',
      description: 'Special session for economic survey & Union Budget 2025-26',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-9.png',
      description: 'CSAT Revision Classes',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-10.png',
      description: 'Access to Vikas Prelims Test Series 2025',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-11.png',
      description: 'Course validity – 2 years',
    },
    {
      imgpath: './assets/Marketing/weekend-offline-lp/why-12.png',
      description:
        'Guidance for the Mains examination will be provided after the UPSC Prelims 2025',
    },
  ];

  faqs = [
    {
      question: 'Does Veranda IAS Coaching Institute provide recorded videos of live classes available?',
      answer:
        'Yes, we will provide you with recorded videos of all live classes. In case if a student misses a live class he/she can watch the recorded video of the same.',
      imageUrl: '././assets/Coursepage/faq/faq-2.png',
    },
    {
      question: 'Will students be provided with books?',
      answer:
        'Yes, students whoever enroll for this course will get 12 handbooks for the subjects: World History, Indian Polity, Modern Indian History, International Relations, Internal Security, Governance, Geography Ethics, Environment, Art & Culture, Ancient & Medieval Indian History, Indian Economy, Science and technology',
      imageUrl: '././assets/Coursepage/faq/faq-6.JPG',
    },
    {
      question: 'Does this UPSC Prelims Super Batch have CSAT classes?',
      answer:
        'Yes, Veranda IAS Coaching Centre provides sessions for all subjects, including the UPSC CSAT paper. Additionally, you can clarify your doubts during live classes to prepare successfully for the UPSC CSE 2025.',
      imageUrl: '././assets/Coursepage/faq/faq-3.JPG',
    },
    {
      question:
        'Is the UPSC test series for IAS exam included in Veranda IAS’s Prelims Super Batch 2025?',
      answer:
        'Yes, Veranda IAS Coaching Academy Prelims Super Batch includes access to Vikas UPSC Prelims Test Series 2025.',
      imageUrl: '././assets/Coursepage/faq/faq-4.JPG',
    },
    {
      question:
        'Can we avail UPSC Prelims Super Batch for UPSC Mains coaching?',
      answer:
        'Of course. After enrolling in our Veranda IAS UPSC CSE coaching, you can access our evening & weekend online classes for UPSC Prelims coaching and UPSC Mains coaching to study at your convenience.',
      imageUrl: '././assets/Coursepage/faq/faq-3.JPG',
    },
    {
      question:
        'Apart from online classes, what benefits can we gain from Veranda IAS UPSC Prelims Super Batch 2025?',
      answer:
        'Upon successful enrollment in our Veranda IAS online coaching (Evening & Weekend) for UPSC Preparation for 2025, you will receive benefits including 270+ hours of classes, dedicated mentorship sessions, UPSC CSAT revision classes, Online UPSC Prelims study materials, UPSC Prelims test series, UPSC Prelims strategy for 2025 and more.',
      imageUrl: '././assets/Coursepage/faq/faq-4.JPG',
    },
  ];

  testimonials = [
    {
      name: 'Sivakrishna Moorthy',
      achievement: 'IAS, AIR 207',
      content:
        'Under the guidance of able mentors, I have been prepared to face any contingencies. Lately, there is no scarcity of materials to prepare for this exam. But what puts an aspirant on the race track is the attitude towards the examination. I have been one of the beneficiaries of the Interview Guidance Programme of the academy. It gave me the much-needed orientation and confidence to take the final personality test',
      imageUrl: './assets/Marketing/weekend-offline-lp/moorthy.png',
    },
    {
      name: 'Sindhu Kavi',
      achievement: 'IRS, AIR 504',
      content:
        'The interview guidance was beneficial to me and helped in achieving a good score in the interview. The interview panel had senior retired bureaucrats who had molded how I delivered the answers. Starting from delivery to the pace and the choice of words, the guidance was instrumental and helped me in facing the UPSC board without any fear. Individual attention to every single candidate is a commendable thing',
      imageUrl: './assets/Marketing/weekend-offline-lp/sindhu.png',
    },
    {
      name: 'Venkatesh',
      achievement: 'IRS, AIR 534',
      content:
        'The personality test at UPSC plays an essential role in our selection. Therefore, the role of our academy and language is vital in this journey. They are one of the main pillars to reach this position in the Indian Revenue Service through their Interview Guidance Programme. They made me understand the nature of personality tests. They helped me to remain calm and positive during the test',
      imageUrl: './assets/Marketing/weekend-offline-lp/venkatesh.png',
    },
  ];

  mentors = [
    {
      name: 'Mr. Adithya Bajpai',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Adithya_Bajpai.webp',
      description: '', // Optional
    },
    {
      name: 'Mr. Amit Verma',
      imageUrl: './assets/Marketing/weekend-offline-lp/mentors/Amit_Verma.webp',
      description: '', // Optional
    },
    {
      name: 'Mr. Ankush Gaba',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Ankush_Gaba.webp',
      description: '', // Optional
    },
    {
      name: 'Mr. Arpit Sharma',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Arpit_Sharma.webp',
      description: '', // Optional
    },
    {
      name: 'Mr. Aviral Tiwari',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Aviral_Tiwari.webp',
      description: '', // Optional
    },
    {
      name: 'Mr. Naman Sethi',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Naman_Sethi.webp',
      description: '', // Optional
    },
    {
      name: 'Mrs. Nitya Pandey',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Nitya_Pandey.webp',
      description: '', // Optional
    },
    {
      name: 'Mr. Ravi Singh',
      imageUrl: './assets/Marketing/weekend-offline-lp/mentors/Ravi_Singh.webp',
      description: '', // Optional
    },
    {
      name: 'Mrs. Shipra Upadhyay',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Shipra_Upadhyay.webp',
      description: '', // Optional
    },
    {
      name: 'Mr. Sidhharth Dagar',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Sidhharth_Dagar.webp',
      description: '', // Optional
    },
    {
      name: 'Mrs. Soumya Chowdhary',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Soumya_Chowdhary.webp',
      description: '', // Optional
    },
    {
      name: 'Mr. Sunil Krishn',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Sunil_Krishnan.webp',
      description: '', // Optional
    },
    {
      name: 'Mr. Sushil Prakash',
      imageUrl:
        './assets/Marketing/weekend-offline-lp/mentors/Sushil_Prakash.webp',
      description: '', // Optional
    },
  ];
}
