import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpscResidentialRoutingModule } from './upsc-residential-routing.module';
import { UpscResidentialComponent } from './upsc-residential.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';


@NgModule({
  declarations: [
    UpscResidentialComponent
  ],
  imports: [
    CommonModule,
    UpscResidentialRoutingModule,SharedModule,FormsModule,HttpClientModule
  ],
  providers:[CrmApiService]
})
export class UpscResidentialModule { }
