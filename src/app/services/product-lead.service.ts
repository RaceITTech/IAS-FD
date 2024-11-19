import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProductLeadService {
  ZBookAccessToken: any;
  leads!: { data: { First_Name: any; Last_Name: any; Email: any; Mobile: string; Vertical: string; Language: string; Lead_Source: string; Sub_Category: string; Location: any; States: any; Source_Website: string; Primary_Lead_Source: string; Channel: string; Lead_Status: string; URL1: string; UTM_Campaign: string | null; UTM_Medium: string | null; UTM_Source: string | null; Campaign_ID: string | null; Ad_Group_ID: string | null; Ad_ID: null; Search_Term: string | null; CPC: null; GCLID_Custom: string | null; Course: string; }[]; trigger: string[]; lar_id: number; };
  leaddata: any;

  constructor(private http:HttpClient) { }

  submitLead(details:any,catgeoryName:any,video:any){
    
    this.http
    .post('https://backend.raceinstitute.in/veranda/fetchzohoGenerateAccesstoken', {})
    .subscribe((data: any) => {
      this.ZBookAccessToken = data.message.token;
      var queryString = window.location.href;
      const urlParams = new URLSearchParams(queryString);
      const adgroup = urlParams.get('adgroupid')??null
      const utm_campaign = urlParams.get('utm_campaign')??null
      const utm_term = urlParams.get('utm_term')??null
      const campaignid = urlParams.get('campaignid')??null
      const gclid = urlParams.get('gclid')??null
      const utm_content = urlParams.get('utm_content')??null
      const utm_medium = urlParams.get('utm_medium') ??null
      const utm_source= urlParams.get('utm_source')??null

      this.leads = {
        data: [
          {
      First_Name: details.value.name,
      Last_Name:details.value.name,
      Email: details.value.email,
      Mobile: '+91' + details.value.phonenumber,
      "Vertical": "Veranda IAS",
      "Language":"English",
      "Lead_Source":"Website",
      "Sub_Category":catgeoryName,
      "Location":details.value.city,
      "States":details.value.state,
      "Source_Website":"Veranda IAS",
      "Primary_Lead_Source":"IAS",
      "Channel" :"Online",
      "Lead_Status":"New",
      "URL1": window.location.href,
            "UTM_Campaign":utm_campaign,
            "UTM_Medium":utm_medium,
             "UTM_Source":utm_source,
             "Campaign_ID":campaignid,
             "Ad_Group_ID":adgroup,
             "Ad_ID":null,
             "Search_Term":utm_term,
             "CPC":null,
             "GCLID_Custom":gclid,
             "Course":"IAS"

                        },
        ],
        trigger: ['approval', 'workflow', 'blueprint'],
        lar_id: 4667271000008978000,
      };
      let zohoObj = {
        access_token: this.ZBookAccessToken,
        contact: this.leads,
      };
      this.http
        .post('https://backend.raceinstitute.in/veranda/zohoLeadCreate', zohoObj)
        .subscribe((data: any) => {
          if (data.success == true) {          }
        });

    });
    var queryString = window.location.href;
    const urlParams = new URLSearchParams(queryString);
    const adgroup = urlParams.get('adgroupid')??null 
    const utm_campaign = urlParams.get('utm_campaign')??null 
    const utm_term = urlParams.get('utm_term')??null 
    const campaignid = urlParams.get('campaignid')??null 
    const gclid = urlParams.get('gclid')??null 
    const utm_content = urlParams.get('utm_content')??null 
    const utm_medium = urlParams.get('utm_medium') ??null 
    const utm_source= urlParams.get('utm_source')??null 
    this.leaddata = {
      data:[
     
        {
          "Attribute": "FirstName",
          "Value": details.value.name
        },
        {
          "Attribute": "EmailAddress",
          "Value": details.value.email
        },
        {
          "Attribute": "Mobile",
          "Value": details.value.phonenumber
        },
        {
          "Attribute": "Phone",
          "Value": details.value.phonenumber
        },
      
        {
          "Attribute": "mx_Language",
          "Value": "English"
        },
        {
          "Attribute": "mx_Vertical",
          "Value": "Veranda IAS"
        },
        {
          "Attribute": "mx_State",
          "Value": details.value.state
        },
        {
          "Attribute": "mx_City",
          "Value": details.value.city
        },
        {
          "Attribute": "mx_City_O",
          "Value": details.value.city
        },
        {
          "Attribute": "Source",
          "Value": "Website"
        },
        {
          "Attribute": "mx_Secondary_Lead_Source",
          "Value": catgeoryName
      },

        {
          "Attribute": "mx_Channel",
          "Value": "Online"
        },
        {
          "Attribute": "mx_Lead_status",
          "Value": "New"
        },
        {
          "Attribute": "mx_Course_Taken",
          "Value":"IAS"
        },
        {
          "Attribute": "mx_Initial_URL",
          "Value": window.location.href
        },
        {
          "Attribute": "mx_UTM_Campaign",
          "Value":utm_campaign
        },
        {
          "Attribute": "mx_UTM_Medium",
          "Value": utm_medium
        },
        {
          "Attribute": "mx_UTM_Source",
          "Value": utm_source
        },
        {
          "Attribute": "mx_New_Campaign_ID",
          "Value": campaignid
        },
        {
          "Attribute": "mx_Ad_Group_ID",
          "Value": adgroup
        },
        {
          "Attribute": "mx_Ad_ID",
          "Value": null
        },
        {
          "Attribute": "mx_Search_Term",
          "Value": utm_term
        },
        {
          "Attribute": "mx_Event_Date",
          "Value": null
        },
        {
          "Attribute": "mx_GCLID_Custom",
          "Value": gclid
        },
      
        {
          "Attribute": "Website",
          "Value":  window.location.href
        },
      ],
                      
    
        
      
    }
    var Number=details.value.phonenumber
    let obj={
      leadData:this.leaddata,
      phoneNumber:Number
   }

   this.http
   .post('https://backend.raceinstitute.in/veranda/leadsquaredApi', obj)
   .subscribe((data: any) => {
    Swal.fire({
      html: video ,
      allowOutsideClick: false,
      showCloseButton: true,
      showConfirmButton: false,
    }).then((result) => {
            window.location.reload()
        })
    })

  }


}
