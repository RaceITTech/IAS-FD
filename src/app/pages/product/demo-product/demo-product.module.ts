import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoProductRoutingModule } from './demo-product-routing.module';
import { DemoProductComponent } from './demo-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoProductComponent],
  imports: [
    CommonModule,
    DemoProductRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class DemoProductModule {}
