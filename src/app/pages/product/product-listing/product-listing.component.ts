import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {

  allStates:any
  states: any;
  currentState:any
  districtList: any;

  constructor(private http:HttpClient, private dom: DomSanitizer, private modalService: NgbModal, private crmApi:CrmApiService) {

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
      vertical:"UPSC",
      formname:"IAS_General",
      language:"English",
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

  courses = [
    {
      imgSrc: './assets/Coursepage/pv-img.png',
      title: 'Holistic Residential Programme',
      subtitle: 'UPSC CSE GSPCM & Interview',
      coachingMode: 'Residential coaching',
      language: 'English',
      exam: 'UPSC CSE 2025',
      courseLink: '/upsc-residential',
      syllabusLink: './assets/Coursepage/documents/UPSC Syllabus - Veranda IAS.pdf'
    },
    {
      imgSrc: './assets/Coursepage/pv-img.png',
      title: 'Live Online Classes',
      subtitle: 'UPSC CSE GSPCM & Interview',
      coachingMode: 'Online',
      language: 'English',
      exam: 'UPSC CSE 2025',
      courseLink: '/upsc-online',
      syllabusLink: './assets/Coursepage/documents/UPSC Syllabus - Veranda IAS.pdf'
    },
    {
      imgSrc: './assets/Coursepage/pv-img.png',
      title: 'Integrated Online Programme',
      subtitle: 'UPSC CSE GSPCM & Interview',
      coachingMode: 'Online',
      language: 'English',
      exam: 'UPSC CSE 2025',
      courseLink: '/product-ilp',
      syllabusLink: './assets/Coursepage/documents/UPSC Syllabus - Veranda IAS.pdf'
    },
    {
      imgSrc: './assets/Coursepage/pv-img.png',
      title: 'Weekend & Evening Classes - Online',
      subtitle: 'UPSC CSE GSPCM & Interview',
      coachingMode: 'Online',
      language: 'English',
      exam: 'UPSC CSE 2025',
      courseLink: '/weekend-evening-online',
      syllabusLink: './assets/Coursepage/documents/UPSC Syllabus - Veranda IAS.pdf'
    },
    // {
    //   imgSrc: './assets/Coursepage/pv-img.png',
    //   title: 'VIKAS Prelims Test Series',
    //   subtitle: 'UPSC CSP GS & CSAT',
    //   coachingMode: 'Online',
    //   language: 'English',
    //   exam: 'UPSC CSE 2025',
    //   courseLink: '',
    //   syllabusLink: './assets/Coursepage/documents/UPSC Syllabus - Veranda IAS.pdf'
    // }
  ];

  testimonials = [
    {
      name: 'Shanmugapriyan', 
      achievement: 'Student',
      content: 'I am the first graduate in my family & a Tamil-medium student preparing for TNPSC exams, this is the first time I have opted to prepare for UPSC CSE. This is a full-time Residential programme, which is helpful to me because every activity during my preparation period is scheduled in a proper way from early morning physical activities to study plans for the whole day. Also, we can interact with our mentors directly regarding doubts in every subject.',
      imageUrl: 'assets/Coursepage/priyadharshan.png'
    },
    {
      name: 'Hasiffa',
      achievement: 'Student',
      content: 'When I look back on my life, I am from a humble background, and completed my schooling at a government school, a self-evaluator in my studies and I felt that I could become a good administrator. I am a beginner in UPSC CSE preparation and I chose residential coaching to stay away from distraction and for proper time management. In this residential coaching, I get mentors’ guidance from early morning 5 am to 10:30 pm, which makes me more comfortable in learning concepts for examination. ',
      imageUrl: 'assets/Coursepage/hasiffa.png'
    },
    {
      name: 'Sri Pal Ram',
      achievement: 'Student',
      content: 'As I completed my M.Com in International Finance, I want to be an auditor and to serve my country that means I want to learn how accounting in our country works and want to be a part of it. I chose this residential programme because of the hostel facilities they provide and I felt that I was completely engaged with my preparation, from physical training in the early morning till the end of the day. Our coaches are excellent, whatever doubts we ask they are explaining it clearly.',
      imageUrl: 'assets/Coursepage/sri_palram.png'
    }
  ];

  video_id: any;
  videoplay(data: string, content: any) {
    this.video_id = this.dom.bypassSecurityTrustResourceUrl(data);
    this.modalService.open(content, { size: 'lg' });
  }

  videos = [
    {
        thumbnail: 'https://i.ytimg.com/vi_webp/nkTjPq__Zzc/maxresdefault.webp',
        videoUrl: 'https://www.youtube.com/embed/nkTjPq__Zzc?si=ZECby2iMv5VxSzxe'
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/wyyLK25u4So/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEcgWShlMA8=&rs=AOn4CLC4b_vSNYKCFhb3AFgg3d-hgzfPEg',
      videoUrl: 'https://www.youtube.com/embed/wyyLK25u4So?si=xJ7YraQnPh3mRY9r'
  },
  {
    thumbnail: 'https://i.ytimg.com/vi_webp/9MgHttzzmlY/maxresdefault.webp',
    videoUrl: 'https://www.youtube.com/embed/9MgHttzzmlY?si=pX0jIf2-qk8ldYVs'
  }
];

}
