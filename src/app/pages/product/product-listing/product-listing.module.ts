import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListingRoutingModule } from './product-listing-routing.module';
import { ProductListingComponent } from './product-listing.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrmApiService } from 'src/app/services/zohoCrm/crm-api.service';


@NgModule({
  declarations: [
    ProductListingComponent
  ],
  imports: [
    CommonModule,
    ProductListingRoutingModule,FormsModule,HttpClientModule,SharedModule
  ],
  providers:[CrmApiService]
})
export class ProductListingModule { }
