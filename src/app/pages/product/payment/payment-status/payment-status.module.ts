import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentStatusRoutingModule } from './payment-status-routing.module';
import { PaymentStatusComponent } from './payment-status.component';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';


@NgModule({
  declarations: [
    PaymentStatusComponent
  ],
  imports: [
    CommonModule,
    PaymentStatusRoutingModule,HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ]
})
export class PaymentStatusModule { }
