import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-free-download',
  templateUrl: './free-download.component.html',
  styleUrls: ['./free-download.component.scss']
})
export class FreeDownloadComponent {

  constructor(private http:HttpClient, private crmApi:CrmApiService) { }

  links = [
    { label: 'Reflection of VIAS mock test questions in UPSC Prelims 2023', value: 'VIAS Predictions & reflections' },
    { label: 'Project Tiger', value: 'Project-Tiger' },
    { label: 'Project Elephant', value: 'Project Elephant' },
    { label: '45 Days Strategy', value: '45 daysstrategy' },
    { label: 'Free Mock Test QP Prelims 2023', value: 'Veranda IAS Free Mock Prelim 2023' },
    { label: 'Explanations for Mock Test Prelims 2023', value: 'Veranda IAS Mock Explanation' }
  ];

  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  pdf_name: string | undefined;
  selectedPdf: string | undefined;

  openForm(pdfName: string): void {
    this.pdf_name = pdfName;
    this.selectedPdf = `assets/Marketing/free-download/${pdfName}.pdf`;
  }

  downloadPdf(): void {
    if (this.selectedPdf) {
      const link = document.createElement('a');
      link.href = this.selectedPdf;
      link.target = '_blank'; 
      link.download = this.pdf_name || ''; 
      document.body.appendChild(link);
      link.click();    
      document.body.removeChild(link);
    }
  }


  submitClicked=false

  onSubmit(data:any){

    this.submitClicked=true

    let obj={
      username:data.value.student_Name,
      phone:'+91' + data.value.phone_Number,
      email:data.value.email_ID,
      vertical:"UPSC",
      formname:"IAS_General",
      language:"English",
      channel:"Online",
      category:"Free-Download"
      }

      let url=window.location.href

      const objdata=this.crmApi.getGeneralObj(obj,url)

      this.crmApi.postCrm(objdata).subscribe((data:any)=>{
        if (data.success===true) {
          this.downloadPdf()
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

}
