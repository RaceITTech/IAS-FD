import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrmApiService {
  url:any
  obj:any
  constructor(private http:HttpClient) { 
    this.url='https://backend.raceinstitute.in/veranda/'
  }

  getGeneralObj(general:any,url:any)
  {
   let obj={
    data:[
      {
        First_Name:general.username,
        Last_Name:general.username,
        Mobile:general.phone,
        Email:general.email,
        Course_Name:general.vertical,
        Form_Name1:general.formname,
        Language:general.language,
        States:general.state,
        District:general.district,
        Questions:general.questions,
        Channel:general.channel,
        Lead_Category:general.category,
        Lead_Status1:"New",
        Secondary_Lead_Status:"New",
        URL:url
      }
    ]
   }

return obj
  }
getEventObj(event:any,url:any)
{
  let obj={
    data:[
      {
        First_Name:event.username,
        Last_Name:event.username,
        Mobile:event.phone,
        Email:event.email,
        Course_Name:event.vertical,
        Form_Name1:event.formname,
        Language:event.language,
        States:event.state,
        District:event.district,
        Channel:event.channel,
        Lead_Category:event.category,
        Lead_Status1:"New",
        Event_Name:event.eventname,
        Event_Date:event.eventdate,
        Secondary_Lead_Status:"New",
        URL:url
      }
    ]
   }
   return obj
}


postCrm(data:any)
{
  return this.http.post(this.url+'iaszohoLeadsCreate',data)
}
}
