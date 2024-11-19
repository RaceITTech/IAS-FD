import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotBookingComponent } from './slot-booking.component';

const routes: Routes = [{ path: '', component: SlotBookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlotBookingRoutingModule { }
