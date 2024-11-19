import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TnpscOnlineCoachingRoutingModule } from './tnpsc-online-coaching-routing.module';
import { TnpscOnlineCoachingComponent } from './tnpsc-online-coaching.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';


@NgModule({
  declarations: [
    TnpscOnlineCoachingComponent
  ],
  imports: [
    CommonModule,
    TnpscOnlineCoachingRoutingModule,SharedModule,FormsModule,HttpClientModule
  ],
  providers:[CrmApiService]
})
export class TnpscOnlineCoachingModule { }
