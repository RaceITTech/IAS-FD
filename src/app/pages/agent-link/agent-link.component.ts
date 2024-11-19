import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agent-link',
  templateUrl: './agent-link.component.html',
  styleUrls: ['./agent-link.component.scss']
})
export class AgentLinkComponent {

  constructor(private http: HttpClient){ }


  linkForm(data:any){
    let obj = {
      amount: data.value.amount,
      email: data.value.email,
      phonenumber: data.value.phonenumber,
      name:data.value.name,
      agent: data.value.agent,
      expireDate: data.value.expireDate.split('-').reverse().join('-')
    }
    console.log(obj);

    this.http.post('https://backend.verandaias.com/verandaias/orders/createPaymentLink',obj).subscribe({
      next: (response:any)=>{
        console.log('form created successfully');
        if(response){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Form Submitted successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      },
      error: (error:any)=>{
        console.log('error');
      }
    })
  }


}
