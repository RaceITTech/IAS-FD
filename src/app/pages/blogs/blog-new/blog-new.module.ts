import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogNewRoutingModule } from './blog-new-routing.module';
import { BlogNewComponent } from './blog-new.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BlogNewComponent
  ],
  imports: [
    CommonModule,
    BlogNewRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CarouselModule
  ]
})
export class BlogNewModule { }
