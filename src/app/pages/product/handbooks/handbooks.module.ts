import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandbooksRoutingModule } from './handbooks-routing.module';
import { HandbooksComponent } from './handbooks.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductLeadService } from 'src/app/services/product-lead.service';
import { ProductService } from 'src/app/services/product.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HandbooksComponent
  ],
  imports: [
    CommonModule,
    HandbooksRoutingModule,SharedModule,HttpClientModule,FormsModule
  ],
  providers:[PaymentService,ProductService,ProductLeadService]
})
export class HandbooksModule { }
