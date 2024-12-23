import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundPolicyRoutingModule } from './refund-policy-routing.module';
import { RefundPolicyComponent } from './refund-policy.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RefundPolicyComponent,
  ],
  imports: [
    CommonModule,
    RefundPolicyRoutingModule,
    SharedModule
  ]
})
export class RefundPolicyModule { }
