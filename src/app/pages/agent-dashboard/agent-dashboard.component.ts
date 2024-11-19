import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.scss']
})
export class AgentDashboardComponent {

  constructor(private http: HttpClient){ }

  displayedColumns: string[] = ['id', 'name', 'amount', 'phone','status','email'];
  dataSource : any;
  fromDate: Date | null = null
  toDate: Date | null = null
  status: string | null = null;
  studentdata: string = ''
  test(data:any): void{
  const fromDate = this.fromDate?.toISOString().split('T')[0];
  const toDate = this.toDate?.toISOString().split('T')[0];
  console.log(fromDate,toDate,this.status);

  const obj = {
    startDate: fromDate,
    endDate: toDate,
    status: this.status
  }
  this.http.post('https://backend.verandaias.com/verandaias/orders/getPaymentLink',obj).subscribe({
    next: (response:any)=>{
      console.log('form created successfully');
      this.dataSource = response.paymentLink.data
      console.log('the data',this.dataSource);

    },
    error: (error:any)=>{
      console.log('error',error);
    }
  })

  }

}
