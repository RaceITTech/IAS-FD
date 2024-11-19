import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekendEveningRoutingModule } from './weekend-evening-routing.module';
import { WeekendEveningComponent } from './weekend-evening.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductLeadService } from 'src/app/services/product-lead.service';
import { ProductService } from 'src/app/services/product.service';



@NgModule({
  declarations: [
    WeekendEveningComponent
  ],
  imports: [
    CommonModule,
    WeekendEveningRoutingModule,SharedModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class WeekendEveningModule { }
