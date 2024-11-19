import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CreateTestComponent } from './create-test/create-test.component';
import { DownloadTestDataComponent } from './download-test-data/download-test-data.component';
import { StudentTestUpdateComponent } from './student-test-update/student-test-update.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { AvailableTestsComponent } from './available-tests/available-tests.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateTestComponent,
    DownloadTestDataComponent,
    StudentTestUpdateComponent,
    AvailableTestsComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,SharedModule,FormsModule,ReactiveFormsModule,HttpClientModule,NgHttpLoaderModule.forRoot(),MatSidenavModule,
    MatToolbarModule,MatListModule,MatIconModule,MatButtonModule,NgOtpInputModule
  ]
})
export class DashboardModule { }
