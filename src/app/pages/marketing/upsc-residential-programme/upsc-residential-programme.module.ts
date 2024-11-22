import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpscResidentialProgrammeRoutingModule } from './upsc-residential-programme-routing.module';
import { UpscResidentialProgrammeComponent } from './upsc-residential-programme.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UpscResidentialProgrammeComponent
  ],
  imports: [
    CommonModule,
    UpscResidentialProgrammeRoutingModule,SharedModule,FormsModule,NgOtpInputModule
  ],
  providers:[CrmApiService]
})
export class UpscResidentialProgrammeModule { }
