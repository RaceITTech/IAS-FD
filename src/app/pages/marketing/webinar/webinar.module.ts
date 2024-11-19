import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarRoutingModule } from './webinar-routing.module';
import { WebinarComponent } from './webinar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WebinarComponent
  ],
  imports: [
    CommonModule,
    WebinarRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,SharedModule
  ],
  providers:[CrmApiService]
})
export class WebinarModule { }
