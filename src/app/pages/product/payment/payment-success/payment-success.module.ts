import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentSuccessRoutingModule } from './payment-success-routing.module';
import { PaymentSuccessComponent } from './payment-success.component';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';


@NgModule({
  declarations: [
    PaymentSuccessComponent
  ],
  imports: [
    CommonModule,
    PaymentSuccessRoutingModule,HttpClientModule,
        NgHttpLoaderModule.forRoot()
  ]
})
export class PaymentSuccessModule { }
