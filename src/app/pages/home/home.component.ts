import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta){ }

  ngOnInit(): void {
    // Set the title of the page
    this.titleService.setTitle('Best UPSC Coaching in India - Top Success Rates - VerandaIAS');
  
    // Set the meta tags for the page
    this.metaService.addTags([
      { name: 'keywords', content: 'best upsc coaching in india, best ias coaching in india, best ias academy in india, india best ias coaching, civil service coaching, civil services coaching, civil service exam coaching, coaching for civil services' },
      { name: 'description', content: 'Join the best UPSC coaching in India. Proven success rates with expert guidance for IAS, IPS, and other exams. Enroll today for India`s best results.' },
    ]);
  }

  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,  // Enables prev/next navigation
    dots: false,  // Disables dots navigation
    navText: [
      '<span><img src="./assets/Homepage/left-arrow.png" alt="Prev"></span>',
      '<span><img src="./assets/Homepage/right-arrow.png" alt="Next"></span>'
    ], // Custom arrows with images
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };  

  courses = [
    {
      imgSrc: 'assets/Homepage/upsc-residential.jpg',
      title: 'UPSC Residential Programme',
      description: 'Our state-of-the-art campus is equipped with  necessary facilities to ensure you receive the best possible education to crack all 3 levels of UPSC CSE exams.',
      courseLink: '/upsc-residential',
    },
    {
      imgSrc: 'assets/Homepage/upsc-online.png',
      title: 'UPSC Live Online Classes',
      description: 'Learn for UPSC exam anywhere and anytime through our Veranda IAS’ Live Online Classes taught by experienced UPSC faculty along with top-notch books & materials',
      courseLink: '/upsc-online',
    },
    {
      imgSrc: 'assets/Homepage/weekend-offline.png',
      title: 'Online Weekend & Evening Classes',
      description: 'Get top-notch UPSC online coaching tailored for working professionals and college students with our weekend & evening classes and achieve your IAS/IPS dreams.',
      courseLink: '/weekend-evening-online',
    },
    {
      imgSrc: 'assets/Homepage/upsc-online.png',
      title: 'TNPSC Group 1 Online Classes',
      description: 'Learn for TNPSC Group 1 exam anywhere and anytime through  IAS-model TNPSC Group I Live Online Classes taught by experienced TNPSC faculties with relevant study materials.',
      courseLink: '/tnpsc-online-coaching',
    },
  ];

  facilities = [
    'Residential Facilities',
    'Sports & Recreational Facilities',
    'Air-conditioned Classrooms',
    'Offline & Digital Library',
    'Spacious Study Rooms',
    'On-Campus Cafeteria',
    'Secure Campus Environment ',
    'Wi-Fi Internet Access'
  ];

  reasons = [
    {
      imgSrc: './assets/Homepage/100.png',
      title: '100% Syllabus Coverage',
      description: 'We deliver an exhaustive syllabus coverage that leaves no stone unturned. Our meticulously crafted curriculum ensures every facet of the exam is addressed, providing candidates with a robust foundation and unrivaled preparation.'
    },
    {
      imgSrc: './assets/Homepage/expert-fac.png',
      title: 'Expert Faculty',
      description: 'Our faculty comprises a cadre of distinguished officers and scholars, bringing a wealth of knowledge and pedagogical prowess. Their deep expertise and innovative approaches to teaching transform intricate subjects into engaging learning experiences'
    },
    {
      imgSrc: './assets/Homepage/fv-lvl-practice.png',
      title: 'Six-Level Practice',
      description: 'Our practice regimen is designed to methodically enhance your exam readiness. This systematic approach rigorously tests and refines your skills, ensuring you are equipped to tackle the complexities of the UPSC exams with confidence and precision'
    },
    {
      imgSrc: './assets/Homepage/personalised-attention.png',
      title: 'Personalised Attention',
      description: 'Our personalised attention offers learning support, including tailored study plans and individualised test feedback. This approach addresses specific needs and challenges, fostering an environment where you can achieve peak performance'
    },
    {
      imgSrc: './assets/Homepage/experienced-mentors.png',
      title: 'Experienced Mentors',
      description: 'Our experienced mentors, who are seasoned professionals, provide nuanced insights and exam strategies, drawing from their extensive backgrounds to offer practical advice and a strategic edge in navigating the UPSC landscape'
    },
    {
      imgSrc: './assets/Homepage/upsc-study-mtls.png',
      title: 'UPSC-centric Study Materials',
      description: 'Crafted with unparalleled precision to align with the UPSC’s evolving demands, featuring comprehensive content, detailed practice questions and expert analyses, these resources are designed to streamline your preparation and bolster your exam strategy'
    }
  ];

}
