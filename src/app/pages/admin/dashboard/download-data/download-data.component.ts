import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-download-data',
  templateUrl: './download-data.component.html',
  styleUrls: ['./download-data.component.scss']
})
export class DownloadDataComponent {

  downloadClicked = false

  tests:any[]=[]

  constructor(private http: HttpClient) {
    this.http.get('https://backend.verandaias.com/verandaias/users/getTests').subscribe((response:any) => {
      this.tests = response.data
    });
  }

  downloadExcel(form: NgForm){

    this.downloadClicked = true

    const dataExcel = {
      test: form.value.testName
    }

    console.log(dataExcel);
  
    this.http.post('https://backend.verandaias.com/verandaias/users/dataExport',dataExcel,{responseType:'blob'}).subscribe({
      next: (response:any)=>{
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${dataExcel.test}.xlsx`; // Set the file name here
        a.click();
        window.URL.revokeObjectURL(url);
        form.resetForm();
        this.downloadClicked = false;
      }
      // ,error: (error:any)=>{
      //   console.log('error',error.error.message);
      // }
    })
  }

}
