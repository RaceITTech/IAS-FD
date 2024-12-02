import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogExploreRoutingModule } from './blog-explore-routing.module';
import { BlogExploreComponent } from './blog-explore.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    BlogExploreComponent
  ],
  imports: [
    CommonModule,
    BlogExploreRoutingModule,
    SharedModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class BlogExploreModule { }
