import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentDashboardRoutingModule } from './agent-dashboard-routing.module';
import { AgentDashboardComponent } from './agent-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AgentDashboardComponent
  ],
  imports: [
    CommonModule,
    AgentDashboardRoutingModule,FormsModule,ReactiveFormsModule,MatTableModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule
  ]
})
export class AgentDashboardModule { }
