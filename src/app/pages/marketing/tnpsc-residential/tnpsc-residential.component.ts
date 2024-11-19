import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tnpsc-residential',
  templateUrl: './tnpsc-residential.component.html',
  styleUrls: ['./tnpsc-residential.component.scss']
})
export class TnpscResidentialComponent implements OnInit {

  constructor(private http:HttpClient, private crmApi:CrmApiService, private titleService: Title, private metaService: Meta){ }
  
  ngOnInit(): void {
    // Set the title of the page
    this.titleService.setTitle('VerandaIAS TNPSC Group 1 Residential Program in Tamil Nadu');
  
    // Set the meta tags for the page
    this.metaService.addTags([
      { name: 'keywords', content: 'tnpsc group 1 residential program chennai, tnpsc group 1 residential program, tnpsc group 1 coaching, residential coaching for tnpsc, best tnpsc preparation in chennai, tnpsc group 1 syllabus, tnpsc exam preparation' },
      { name: 'description', content: 'Prepare for TNPSC Group 1 with our residential program in Tamil Nadu. Full guidance and expert coaching for high success rates in Group 1 exams.' },
    ]);
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
      username:data.value.studentName,
      phone:'+91' + data.value.phonenumber,
      email:data.value.emailId,
      vertical:"TNPSC-GROUP-1",
      formname:"IAS_General",
      language:"English",
      channel:"Residential",
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

  keyDifferentiators = [
    {
      title: "Best TNPSC Gr I Coaching Institute",
      description: "Veranda IAS stands tall as the best TNPSC Group I Residential Coaching Institute in Chennai with best TNPSC faculty and mentors",
      imgSrc: "assets/Marketing/tnpsc-residential/key-1.png"
    },
    {
      title: "Experienced TNPSC Mentors",
      description: "Our experienced TNPSC faculty and established mentors offer exceptional coaching and have guided more than 100k+ students in various TNPSC exams",
      imgSrc: "assets/Marketing/tnpsc-residential/key-2.png"
    },
    {
      title: "Top-notch TNPSC Study Materials",
      description: "Our TNPSC Group 1 study materials are prepared by our expert TNPSC R&D members and contain clear explanations of various topics",
      imgSrc: "assets/Marketing/tnpsc-residential/key-3.png"
    },
    {
      title: "Bilingual TNPSC Gr I Classes",
      description: "Students can attend classes in English as well as in Tamil, which helps them to understand assorted TNPSC topics in a better manner",
      imgSrc: "assets/Marketing/tnpsc-residential/key-4.png"
    }
  ];

  uniqueFeatures = [
    {
      description: "Comprehensive coverage of the TNPSC Group I Prelims Exam syllabus",
      imgSrc: "assets/Marketing/tnpsc-residential/Square-Tick.png"
    },
    {
      description: "Brushes up the entire TNPSC Group I Prelims syllabus for a quick revision",
      imgSrc: "assets/Marketing/tnpsc-residential/Square-Tick.png"
    },
    {
      description: "Integration of Current affairs and assorted TNPSC Gr I topics",
      imgSrc: "assets/Marketing/tnpsc-residential/Square-Tick.png"
    },
    {
      description: "Classes based on TNPSC Gr I Exam latest exam trends and syllabus",
      imgSrc: "assets/Marketing/tnpsc-residential/Square-Tick.png"
    }
  ];

}
