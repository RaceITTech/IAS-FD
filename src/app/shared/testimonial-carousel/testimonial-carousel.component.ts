import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.scss']
})
export class TestimonialCarouselComponent {

  testimonialsSlides: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: false,
    autoplayHoverPause: true,
    autoplay: true,
    center: true,
    navSpeed: 1000,
    items:2,
    margin:10,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  video_id: any;

  videoplay(data: string, content: any) {
    this.video_id = this.dom.bypassSecurityTrustResourceUrl(data);
    this.modalService.open(content, { size: 'lg' });
  }
  constructor(private modalService: NgbModal,private dom: DomSanitizer) { }

  testimonialsSlidesContent = [
    {
      imgSrc: 'assets/Shared/testimonial-crsl/first-vdo.png',
      videoUrl: 'https://www.youtube.com/embed/6JWTj5GYEEg?si=gqCZ29rQslUKkmAj'
    },
    {
      imgSrc: 'assets/Shared/testimonial-crsl/second-vdo.png',
      videoUrl: 'https://www.youtube.com/embed/qRWhjbKGU9E?si=L27Rg48coameDzZt'
    },
    {
      imgSrc: 'assets/Shared/testimonial-crsl/third-vdo.png',
      videoUrl: 'https://www.youtube.com/embed/_5nT_kO958o?si=VkvQ6bOi6HfG1pk3'
    },
    {
      imgSrc: 'assets/Shared/testimonial-crsl/fourth-vdo.webp',
      videoUrl: 'https://www.youtube.com/embed/rzFCJfE2e8M?si=DjxcBk6dvhuakk-J'
    }
  ];

}
