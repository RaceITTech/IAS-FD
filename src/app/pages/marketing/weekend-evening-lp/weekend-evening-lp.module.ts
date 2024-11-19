import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeekendEveningLpRoutingModule } from './weekend-evening-lp-routing.module';
import { WeekendEveningLpComponent } from './weekend-evening-lp.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    WeekendEveningLpComponent
  ],
  imports: [
    CommonModule,
    WeekendEveningLpRoutingModule,SharedModule,FormsModule,NgOtpInputModule
  ],
  providers:[CrmApiService]
})
export class WeekendEveningLpModule { }
