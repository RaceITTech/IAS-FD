import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FacultyComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,SharedModule
  ]
})
export class FacultyModule { }
