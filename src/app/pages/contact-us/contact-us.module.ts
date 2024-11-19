import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,SharedModule
  ]
})
export class ContactUsModule { }
