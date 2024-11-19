import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlotBookingRoutingModule } from './slot-booking-routing.module';
import { SlotBookingComponent } from './slot-booking.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SlotBookingComponent
  ],
  imports: [
    CommonModule,
    SlotBookingRoutingModule,NgOtpInputModule,HttpClientModule,FormsModule
  ]
})
export class SlotBookingModule { }
