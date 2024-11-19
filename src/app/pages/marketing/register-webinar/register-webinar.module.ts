import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterWebinarRoutingModule } from './register-webinar-routing.module';
import { RegisterWebinarComponent } from './register-webinar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterWebinarComponent
  ],
  imports: [
    CommonModule,
    RegisterWebinarRoutingModule,FormsModule
  ]
})
export class RegisterWebinarModule { }
