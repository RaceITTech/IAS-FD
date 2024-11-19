import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IopRoutingModule } from './iop-routing.module';
import { IopComponent } from './iop.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductLeadService } from 'src/app/services/product-lead.service';
import { ProductService } from 'src/app/services/product.service';


@NgModule({
  declarations: [
    IopComponent
  ],
  imports: [
    CommonModule,
    IopRoutingModule,SharedModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class IopModule { }
