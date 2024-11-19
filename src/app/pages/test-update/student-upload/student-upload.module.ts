import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentUploadRoutingModule } from './student-upload-routing.module';
import { StudentUploadComponent } from './student-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    StudentUploadComponent
  ],
  imports: [
    CommonModule,
    StudentUploadRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,NgHttpLoaderModule.forRoot(),NgOtpInputModule
  ]
})
export class StudentUploadModule { }
