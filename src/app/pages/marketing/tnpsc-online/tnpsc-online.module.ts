import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TnpscOnlineRoutingModule } from './tnpsc-online-routing.module';
import { TnpscOnlineComponent } from './tnpsc-online.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    TnpscOnlineComponent
  ],
  imports: [
    CommonModule,
    TnpscOnlineRoutingModule,SharedModule,FormsModule,NgOtpInputModule
  ],
  providers:[CrmApiService]
})
export class TnpscOnlineModule { }
