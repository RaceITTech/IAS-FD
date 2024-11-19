import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IasWeekendEveningLpRoutingModule } from './ias-weekend-evening-lp-routing.module';
import { IasWeekendEveningLpComponent } from './ias-weekend-evening-lp.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    IasWeekendEveningLpComponent
  ],
  imports: [
    CommonModule,
    IasWeekendEveningLpRoutingModule,SharedModule,FormsModule,NgOtpInputModule
  ],
  providers:[CrmApiService]
})
export class IasWeekendEveningLpModule { }
