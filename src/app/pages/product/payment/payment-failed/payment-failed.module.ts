import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentFailedRoutingModule } from './payment-failed-routing.module';
import { PaymentFailedComponent } from './payment-failed.component';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';


@NgModule({
  declarations: [
    PaymentFailedComponent
  ],
  imports: [
    CommonModule,
    PaymentFailedRoutingModule,HttpClientModule,
        NgHttpLoaderModule.forRoot()
  ]
})
export class PaymentFailedModule { }
