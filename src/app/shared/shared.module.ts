import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UpscOpputunitiesComponent } from './upsc-opputunities/upsc-opputunities.component';
import { RouterModule } from '@angular/router';
import { MarketingFooterComponent } from './marketing-footer/marketing-footer.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { MarketingNavComponent } from './marketing-nav/marketing-nav.component';
import { TestimonialCarouselComponent } from './testimonial-carousel/testimonial-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material/icon';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    UpscOpputunitiesComponent,
    MarketingFooterComponent,
    DashboardNavComponent,
    MarketingNavComponent,
    TestimonialCarouselComponent,
    SkeletonLoaderComponent,
  ],
  imports: [
    CommonModule,RouterModule,CarouselModule,MatIconModule
  ],
  exports: [
    NavbarComponent,FooterComponent,UpscOpputunitiesComponent,MarketingFooterComponent,DashboardNavComponent,MarketingNavComponent,TestimonialCarouselComponent,SkeletonLoaderComponent
  ]
})
export class SharedModule { }
