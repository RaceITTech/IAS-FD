import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewProductService } from 'src/app/services/new-product.service';
import {
  ProductDetails,
  ProductService,
} from 'src/app/services/product.service';

@Component({
  selector: 'app-handbooks',
  templateUrl: './handbooks.component.html',
  styleUrls: ['./handbooks.component.scss'],
})
export class HandbooksComponent {
  courseData: ProductDetails | undefined;
  mainImgSrc = "./assets/Coursepage/creatives/hand_books.jpg"
  subImages = [
    "./assets/Coursepage/creatives/hand_books.jpg",
    "./assets/Coursepage/creatives/HDB-1.jpg",
    "./assets/Coursepage/creatives/HDB-2.jpg",
    "./assets/Coursepage/creatives/HDB-3.jpg",
    "./assets/Coursepage/creatives/HDB-4.jpg",
    "./assets/Coursepage/creatives/HDB-5.jpg",
    "./assets/Coursepage/creatives/HDB-6.jpg",
    "./assets/Coursepage/creatives/HDB-7.jpg",
    "./assets/Coursepage/creatives/HDB-8.jpg",
    "./assets/Coursepage/creatives/HDB-9.jpg",
    "./assets/Coursepage/creatives/HDB-10.jpg",
    "./assets/Coursepage/creatives/HDB-11.jpg",
    "./assets/Coursepage/creatives/HDB-12.jpg",
  ]
  constructor(
    private router: Router,
    private productService: NewProductService
  ) {
    this.loadCourseData();
  }

  ngOnInit(): void {}

  changeMainImage(imageSrc: string) {
    this.mainImgSrc = imageSrc;
  }

  previewBooks() {
    // URL of the PDF you want to preview
    const pdfUrl = '/assets/planner-pdf/STK-planner.pdf';
    window.open(pdfUrl, '_blank');
  }

  private loadCourseData(): void {
    this.productService.getProductDetails('GI010').subscribe({
      next: (value) => {
        debugger;
        this.courseData = this.productService.setCourseDetails(value);
        const courseDetails = this.productService.getCourseDetails();
        console.log(courseDetails);
      },
      error: (err) => {
        alert('Error loading page');
      },
    });
  }

  onBuyClick(): void {
    this.router.navigateByUrl('/payment');
  }

  faqs = [
    {
      question:
        'Are there solved UPSC CSE Prelims PYQs available in these books?',
      answer:
        'Yes, this book has topic-wise solved UPSC Prelims PYQs from 2015 to 2022. Explanations and its relevance with that particular year’s current affairs is also provided',
    },
    {
      question: 'Do these books have practice questions for mains?',
      answer:
        'Yes, these books have practice questions for mains examinations as well as preliminary examinations',
    },
    {
      question: 'Name of the subjects for which the books are available?',
      answer:
        'World History, Indian Polity, Modern Indian History, International Relations, Internal Security, Governance, Geography Ethics, Environment, Art & Culture, Ancient & Medieval Indian History, Indian Economy, Science and technology',
    },
  ];
}
