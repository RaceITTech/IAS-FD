import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,NgHttpLoaderModule.forRoot(),NgOtpInputModule
  ]
})
export class LoginModule { }
