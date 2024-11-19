import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentPageRoutingModule } from './payment-page-routing.module';
import { PaymentPageComponent } from './payment-page.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PaymentPageComponent
  ],
  imports: [
    CommonModule,
    PaymentPageRoutingModule,SharedModule,HttpClientModule,FormsModule,
    NgHttpLoaderModule.forRoot()
  ]
})
export class PaymentPageModule { }
