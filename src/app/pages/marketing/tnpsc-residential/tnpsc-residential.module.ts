import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TnpscResidentialRoutingModule } from './tnpsc-residential-routing.module';
import { TnpscResidentialComponent } from './tnpsc-residential.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TnpscResidentialComponent
  ],
  imports: [
    CommonModule,
    TnpscResidentialRoutingModule,SharedModule,FormsModule
  ]
})
export class TnpscResidentialModule { }
