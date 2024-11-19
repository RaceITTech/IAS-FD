import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpsWeekendEveningLpRoutingModule } from './ips-weekend-evening-lp-routing.module';
import { IpsWeekendEveningLpComponent } from './ips-weekend-evening-lp.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    IpsWeekendEveningLpComponent
  ],
  imports: [
    CommonModule,
    IpsWeekendEveningLpRoutingModule,SharedModule,FormsModule,NgOtpInputModule
  ],
  providers:[CrmApiService]
})
export class IpsWeekendEveningLpModule { }
