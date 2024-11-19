import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsofserviceRoutingModule } from './termsofservice-routing.module';
import { TermsofserviceComponent } from './termsofservice.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TermsofserviceComponent
  ],
  imports: [
    CommonModule,
    TermsofserviceRoutingModule,SharedModule
  ]
})
export class TermsofserviceModule { }
