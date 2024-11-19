import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderstatusRoutingModule } from './orderstatus-routing.module';
import { OrderstatusComponent } from './orderstatus.component';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    OrderstatusComponent
  ],
  imports: [
    CommonModule,
    OrderstatusRoutingModule,HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ]
})
export class OrderstatusModule { }
