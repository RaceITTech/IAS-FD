import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpscOnlineRoutingModule } from './upsc-online-routing.module';
import { UpscOnlineComponent } from './upsc-online.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';


@NgModule({
  declarations: [
    UpscOnlineComponent
  ],
  imports: [
    CommonModule,
    UpscOnlineRoutingModule,SharedModule,FormsModule,HttpClientModule
  ],
  providers:[CrmApiService]
})
export class UpscOnlineModule { }
