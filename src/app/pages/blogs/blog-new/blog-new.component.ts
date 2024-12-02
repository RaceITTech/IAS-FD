import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.scss']
})
export class BlogNewComponent {

  currentUrl: string = '';
  isLoading = true; // Add a loading state
  articleData: any;
  allBlogs:any;
  recentBlogs: any[] = [];
  filteredExams: any[] = [];
  filteredVideos: any[] = [];
  filteredRelatedCourses: any[] = [];

  constructor(private location: Location, private http: HttpClient, private router: Router, private modalService: NgbModal, private dom: DomSanitizer) { }

  ngOnInit(): void {
    // Get the current path
    this.currentUrl = this.location.path();
  
    // Extract the content after '/blog/'
    if (this.currentUrl.startsWith('/blog/')) {
      this.currentUrl = this.currentUrl.substring(6); // 6 is the length of '/blog/'
      console.log('currentUrl',this.currentUrl);
    }

    // debugger;
  
    // Prepare the object to be sent to the API
    const obj = { urlTitle: this.currentUrl };

    // this.recentBlogs = this.getRecentPosts(5);
    
    this.TopStories()
    this.checkArticleExists(obj);
  }
  
  TopStories():void{
    this.http.post("https://resultbackend.verandarace.com/result/findArticle",{vertical:"IAS"}).subscribe((response:any)=>{
      if (response?.data && Array.isArray(response.data)) {
        this.allBlogs = response.data;

        console.log('All Blogs:', this.allBlogs);

        // Sort and get recent posts
        this.recentBlogs = this.getRecentPosts(2);
        console.log('recent blog datas',this.recentBlogs);
      } else {
        console.error('Invalid response format or no data available:', response);
        this.allBlogs = [];
        this.recentBlogs = [];
      }
     })
  }
  
  getRecentPosts(limit: number): any[] {
    if (!Array.isArray(this.allBlogs) || this.allBlogs.length === 0) {
      console.warn('No blogs available to sort.');
      return [];
    }
  
    console.log('test data final',this.allBlogs
      .filter((blog) => blog).map((e)=>e.createdAt) );
    
    return this.allBlogs
      .filter((blog) => blog)
      .map((e)=>e) // Ensure createdAt exists
      .sort((a, b) =>
        new Date(b.createdAt.$date).getTime() - new Date(a.createdAt.$date).getTime()
      )
      .slice(0, limit);
  }

  
 
  

  checkArticleExists(obj: any): void {
    this.http.post('https://resultbackend.verandarace.com/result/findArticle', obj)
      .subscribe(
        (response: any) => {
          this.isLoading = false; // Stop loading state
          if (response.success === true && response.data!=null) {
            // If the article exists, process the data
            this.articleData = response.data[0];
            
            const courseName = this.articleData;

            // Filter upcoming exams, videos, and related courses based on the article data
            this.filteredExams = this.upcomingExams.filter(x => x.examName === courseName);
            this.filteredVideos = this.testimonialVideos.filter(y => y.course === courseName);
            this.filteredRelatedCourses = this.relatedCourses.filter(z => z.courseName === courseName);
            // this.router.navigate([`blog/${response.data.urlTitle}`]); // Navigate to the article's URL
          } else {
            // If the article doesn't exist, redirect to the error page
            this.router.navigate(['/error-404']);
          }
        },
        (error) => {
          console.error('API Error:', error);
          this.isLoading = false; // Stop loading state on error
          // Redirect to the error page if the API call fails
          this.router.navigate(['/error-404']);
        }
      );
  }

  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit(data:any){
    console.log(data)
  }

  offlineCentres: string[] = [
    'Chengalpet',
    'Tiruppur',
    'Chidambaram',
    'Tiruvarur',
    'Coimbatore',
    'Vellore',
    'Dindigul',
    'Trichy',
    'Erode',
    'Villupuram',
    'Hosur',
    'Puducherry',
    'Kanchipuram',
    'Kannur',
    'Karaikudi',
    'Kochi',
    'Krishnagiri',
    'Kollam',
    'Kumbakonam',
    'Kozhikode',
    'Madurai',
    'Alappuzha',
    'Mayildauthurai',
    'Thrissur',
    'Nagercoil',
    'Trivandrum',
    'Namakkal',
    'Palakkad',
    'Salem',
    'Kottayam',
    'Tambaram',
    'Dharwad',
    'T.Nagar',
    'Mangaluru',
    'Thanjavur',
    'Marathahalli',
    'Theni',
    'Mysuru',
    'Tirunelveli',
    'Vijayanagar',
  ];


  upcomingExams = [
    {
      examName: 'Bank',
      exams: [
        "SBI PO Exam 2024",
        "SBI Clerk Exam 2024",
        "IBPS PO Exam 2024",
        "IBPS Clerk Exam 2024",
        "IBPS RRB PO Exam 2024",
        "IBPS RRB Clerk Exam 2024",
        "SBI SO Exam 2024",
        "IBPS SO Exam 2024",
        "LIC ADO Exam 2024",
        "LIC AAO Exam 2024",
        "NIACL AO Exam 2024",
        "NICL AO Exam 2024",
        "RBI Assistant Exam 2024",
        "RBI Grade B Exam 2024",
        "IDBI Executive Exam 2024",
        "IDBI SO Exam",
        "IDBI Asst. Manager Exam 2024",
        "NABARD Grade A Exam 2024"
      ]
    },
    {
      examName: 'SSC',
      exams: [
        "SSC CGL Exam 2024",
        "SSC CHSL Exam 2024",
        "SSC MTS Exam 2024",
        "SSC Stenographer Exam 2024",
        "SSC CPO Exam 2024",
        "SSC JE Exam 2024",
        "SSC GD Constable Exam 2024",
        "SSC Selection Post Exam 2024",
        "SSC JHT Exam 2024",
        "IB ACIO Exam 2024",
        "IB SA/MTS Exam 2024"
      ]
    },
    {
      examName: 'TNPSC',
      exams: [
        "TNPSC Group IV Exam 2024",
        "TNPSC Group II & IIA Exam 2024",
        "TNPSC Group I Exam 2024",
        "TNPSC Group VA Exam 2025",
        "TNPSC Group VII Exam 2024"
      ]
    }
  ];  

  video_id: any;
  videoplay(data: string, content: any) {
    this.video_id = this.dom.bypassSecurityTrustResourceUrl(data);
    this.modalService.open(content, { size: 'lg' });
  }

  testimonials = [
    {
      name: 'Shanmugapriyan', 
      achievement: 'Student',
      content: 'I am the first graduate in my family & a Tamil-medium student preparing for TNPSC exams, this is the first time I have opted to prepare for UPSC CSE. This is a full-time Residential programme, which is helpful to me because every activity during my preparation period is scheduled in a proper way from early morning physical activities to study plans for the whole day. Also, we can interact with our mentors directly regarding doubts in every subject.',
      imageUrl: 'assets/Coursepage/priyadharshan.png'
    },
    {
      name: 'Hasiffa',
      achievement: 'Student',
      content: 'When I look back on my life, I am from a humble background, and completed my schooling at a government school, a self-evaluator in my studies and I felt that I could become a good administrator. I am a beginner in UPSC CSE preparation and I chose residential coaching to stay away from distraction and for proper time management. In this residential coaching, I get mentors’ guidance from early morning 5 am to 10:30 pm, which makes me more comfortable in learning concepts for examination. ',
      imageUrl: 'assets/Coursepage/hasiffa.png'
    },
    {
      name: 'Sri Pal Ram',
      achievement: 'Student',
      content: 'As I completed my M.Com in International Finance, I want to be an auditor and to serve my country that means I want to learn how accounting in our country works and want to be a part of it. I chose this residential programme because of the hostel facilities they provide and I felt that I was completely engaged with my preparation, from physical training in the early morning till the end of the day. Our coaches are excellent, whatever doubts we ask they are explaining it clearly.',
      imageUrl: 'assets/Coursepage/sri_palram.png'
    }
  ];

  courses = [
    {
      imgSrc: './assets/Coursepage/pv-img.png',
      title: 'Holistic Residential Programme',
      subtitle: 'UPSC CSE GSPCM & Interview',
      coachingMode: 'Residential coaching',
      language: 'English',
      exam: 'UPSC CSE 2025',
      courseLink: '/upsc-residential',
      syllabusLink: './assets/Coursepage/documents/UPSC Syllabus - Veranda IAS.pdf'
    },
    {
      imgSrc: './assets/Coursepage/pv-img.png',
      title: 'Live Online Classes',
      subtitle: 'UPSC CSE GSPCM & Interview',
      coachingMode: 'Online',
      language: 'English',
      exam: 'UPSC CSE 2025',
      courseLink: '/upsc-online',
      syllabusLink: './assets/Coursepage/documents/UPSC Syllabus - Veranda IAS.pdf'
    },
    {
      imgSrc: './assets/Coursepage/pv-img.png',
      title: 'Integrated Online Programme',
      subtitle: 'UPSC CSE GSPCM & Interview',
      coachingMode: 'Online',
      language: 'English',
      exam: 'UPSC CSE 2025',
      courseLink: '/product-ilp',
      syllabusLink: './assets/Coursepage/documents/UPSC Syllabus - Veranda IAS.pdf'
    },
    {
      imgSrc: './assets/Coursepage/pv-img.png',
      title: 'Weekend & Evening Classes - Online',
      subtitle: 'UPSC CSE GSPCM & Interview',
      coachingMode: 'Online',
      language: 'English',
      exam: 'UPSC CSE 2025',
      courseLink: '/weekend-evening-online',
      syllabusLink: './assets/Coursepage/documents/UPSC Syllabus - Veranda IAS.pdf'
    },
    // {
    //   imgSrc: './assets/Coursepage/pv-img.png',
    //   title: 'VIKAS Prelims Test Series',
    //   subtitle: 'UPSC CSP GS & CSAT',
    //   coachingMode: 'Online',
    //   language: 'English',
    //   exam: 'UPSC CSE 2025',
    //   courseLink: '',
    //   syllabusLink: './assets/Coursepage/documents/UPSC Syllabus - Veranda IAS.pdf'
    // }
  ];


  testimonialVideos = [
    {
      course:'Bank',
      name: 'Amsalekha',
      position: 'Management Trainee',
      exam: 'AIC Exam 2024',
      thumbnail: 'https://verandarace.com/verandarace-assets/assets/Blog-New/amsalekha.png',
      logo: 'https://verandarace.com/verandarace-assets/assets/Blog-New/aic-lg.png',
      videoUrl: '',
      testimonial: `I prepared for Bank Exams in Veranda RACE’s Tambaram branch. They trained me specifically for the AIC Exam 
                    with the latest exam pattern and mock tests. Their test batch was particularly super useful for me. I’m 
                    happy that I could contribute more to the profession of my choice! Thanks to Veranda RACE faculty and mentors!`
    },
    {
      course:'Bank',
      name: 'Rashika JR',
      position: 'Probationary Officer',
      exam: 'SBI PO 2023',
      thumbnail: 'https://verandarace.com/verandarace-assets/assets/Blog-New/rashika.png',
      logo: 'https://verandarace.com/verandarace-assets/assets/Blog-New/sbi-lg.png',
      videoUrl: '',
      testimonial: `Coming from a science background, I found Reasoning & Aptitude very difficult. My mentors helped me to 
                    overcome my fear and achieve more marks. They also helped me to polish my communication skills & current 
                    affairs through mock interview sessions. I've now cleared 3+ Bank exams in a single year. It is all because 
                    of Veranda RACE and their faculty!`
    },
    {
      course:'Bank',
      name: 'Rajalakshmi',
      position: 'Probationary Officer',
      exam: 'IBPS RRB PO 2023',
      thumbnail: 'https://verandarace.com/verandarace-assets/assets/Blog-New/Rajalakshmi.png',
      logo: 'https://verandarace.com/verandarace-assets/assets/Blog-New/tngb-lg.png',
      videoUrl: '',
      testimonial: `I prepared for Bank Exams in Veranda RACE’s Tambaram branch. They trained me specifically for the AIC Exam 
                    with the latest exam pattern and mock tests. Their test batch was particularly super useful for me. I’m 
                    happy that I could contribute more to the profession of my choice! Thanks to Veranda RACE faculty and mentors!`
    },
    {
      course:'TNPSC',
      name: 'Thamarai Selvi',
      position: '',
      exam: 'TNPSC Group II Exam',
      thumbnail: 'https://verandarace.com/verandarace-assets/assets/Blog-New/Thamarai-Selvi.png',
      logo: 'https://verandarace.com/verandarace-assets/assets/Blog-New/tn-logo.png',
      videoUrl: 'https://www.youtube.com/embed/7FJ20N7MPfU?si=Qt8pifi2KywaDZPu',
      testimonial: `“Studying from a remote village in Tirunelveli district, Veranda RACE faculty and mentors guided me from scratch. Their exam strategies helped me to score more marks in even the hardest subject. I used the 'Library' and 'Study Hall' the most to prepare for the TNPSC exams. Their facilities impressed my parents and my father wanted me to join only Veranda RACE! I'm happy that I cracked the TNPSC Exam in my first attempt.”`
    },
    {
      course:'TNPSC',
      name: 'Prajith',
      position: 'Assistant, Revenue Department',
      exam: '',
      thumbnail: 'https://verandarace.com/verandarace-assets/assets/Blog-New/Prajith.png',
      logo: 'https://verandarace.com/verandarace-assets/assets/Blog-New/tn-logo.png',
      videoUrl: '',
      testimonial: `“Veranda RACE’s Group 2A test series was the important reason for my victory in TNPSC Group 2A Exam. Each mock test helped me to know my weakness with ‘Black Box Tracker’ serving me as a personal mentor. Also, their Brahma CA magazine in both English and Tamil helped me a lot with my Current Affairs preparation! Thanks Veranda RACE! You helped me achieve my dream govt. job!”`
    },
    {
      course:'TNPSC',
      name: 'Aathila Farsana',
      position: 'Asst Inspector, Local Fund Audit Dept',
      exam: '',
      thumbnail: 'https://verandarace.com/verandarace-assets/assets/Blog-New/Aathila-Farhana.png',
      logo: 'https://verandarace.com/verandarace-assets/assets/Blog-New/tn-logo.png',
      videoUrl: '',
      testimonial: `நான் கோயம்பத்தூரில் உள்ள வெராண்டா ரேஸ் பயிற்சி நிலையத்தில் TNPSC தேர்வுகளுக்கு பயிற்சி பெற்றேன். அங்குள்ள ஆசிரியர்கள் மிகவும் சிறப்பான முறையில் அனைத்து  பாடங்களும் புரியும்படி சொல்லித் தந்தார்கள்! இப்பொழுது நான் ஒரு தமிழ்நாடு அரசு அதிகாரி ஆகி என்னுடைய தந்தையை பெருமைப்படுத்தியுள்ளேன்! நன்றி Veranda RACE!    `
    },
    {
      course:'SSC',
      name: 'Jaya Chitra',
      position: 'Stenographer',
      exam: 'SSC CHSL 2023',
      thumbnail: 'https://verandarace.com/verandarace-assets/assets/Blog-New/jayachithra.png',
      logo: 'https://verandarace.com/verandarace-assets/assets/Blog-New/ssc-chsl-lg.png',
      videoUrl: 'https://www.youtube.com/embed/eTbX05elHN0?si=1d-1HviNt_a4X8Cf',
      testimonial: `I prepared for SSC Exams in Veranda RACE Tirunelveli branch. After completing college, I studied 
                    wholeheartedly using the lab and library of Veranda RACE with the help of SSC faculty. My father 
                    always said RACE is the finest institute and you’ll know the competition once you enter there. I'm 
                    particularly happy that I'm the first Central Govt. officer in family! Veranda RACE made that a reality!`
    },
    {
      course:'SSC',
      name: 'Jagadeesan',
      position: 'Examiner Inspector',
      exam: ' SSC CGL 2023',
      thumbnail: 'https://verandarace.com/verandarace-assets/assets/Blog-New/Jagadessan.png',
      logo: 'https://verandarace.com/verandarace-assets/assets/Blog-New/ssc-lg.png',
      videoUrl: '',
      testimonial: `“I prepared for 10 months in Veranda RACE for SSC exams. Their Tier II Batch was the most effective part during my SSC exam preparation. Veranda RACE's online tests enlightened me with the exact strategy on what to do and what not to do in the exams. Test Batch is one of the most effect way to learn and help me finetune for the difficult situations in the SSC exams. Thanks RACE!”`
    },
    {
      course:'SSC',
      name: 'Dhilip Kumar',
      position: 'Inspector (CGST)',
      exam: 'SSC CGL 2023',
      thumbnail: 'https://verandarace.com/verandarace-assets/assets/Blog-New/Dhilip-Kumar.png',
      logo: 'https://verandarace.com/verandarace-assets/assets/Blog-New/mes-lg.png',
      videoUrl: 'https://www.youtube.com/embed/EFeT_IIG8IM?si=ABCYgOZFxCm_xCD3',
      testimonial: `I cracked SSC CHSL & SSC CGL Exams after preparing with the help of Veranda RACE. After working in private sector, my friend suggested to join SSC course in Veranda RACE. Faculty solved all my infinite doubts and study materials were very useful for more. Cracking two Central Govt. jobs within a period of two years is only because of Veranda RACE! Their online tests are the best to prepare for SSC Exams.`
    },
    // {
    //   course:'SSC',
    //   name: 'Bhuvaneshwaran',
    //   position: 'Auditor, Defence Accounts Dept.',
    //   exam: '',
    //   thumbnail: 'https://verandarace.com/verandarace-assets/assets/Blog-New/bhuvaneshwaran.png',
    //   logo: 'https://verandarace.com/verandarace-assets/assets/Blog-New/defence-lg.png',
    //   videoUrl: '',
    //   testimonial: `Joining Veranda RACE for SSC course changed my course of exam preparation. With friendly faculty and mentors, my focus and marks soared higher with each mock tests. Their Test Batch was a game changer making me realise the effect of my preparation. Thanks to my parents and Veranda RACE faculty! Their computer labs really helped me to attempt more online mock tests.`
    // },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      '<',
      '>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };


  relatedCourses = [

    {
      courseName:"TNPSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-tnpsc-offline.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-tnpsc-logo.webp",
      name: "TNPSC Group 4 Offline Course",
      coachingMode: "1000+ hours classroom coaching",
      language: "30+ TNPSC full mock tests",
      exam: "TNPSC exam study materials",
      sessions: "Regular TNPSC mentor sessions",
      amount:'₹ 20,000',
      strike:'₹ 24,000',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/tnpsc-group-iv',
       altcourse:'Veranda Race - Classroom-course - TNPSC Bg',
      logo:'Veranda Race - Classroom-course - TNPSC Logo'
    },
    {
      courseName:"TNPSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-tnpsc-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-tnpsc-logo.webp",
      name: "TNPSC Group 2 & 2A Mains Offline Course",
      coachingMode: "1000+ hours classroom coaching",
      language: "30+ full mock tests",
      exam: "Bilingual monthly CA & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 39,000',
      strike:'₹ 46,800',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/group2-2a-mains-offline-classes',
       altcourse:'Veranda Race - Classroom-course - TNPSC Bg',
      logo:'Veranda Race - Classroom-course - TNPSC Logo'
    },

    {
      courseName:"Railways",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-rrb-offline.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-rrb-logo.webp",
      name: "Railways Offline Course",
      coachingMode: "1000+ hours offline coaching",
      language: "30+ RRB exam full mock tests",
      exam: "RRB exam study  materials",
      sessions: "Regular Railways mentor sessions",
      amount:'₹ 19,500',
      strike:'₹ 23,400',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/railways-offline-coaching',
       altcourse:'Veranda Race - Classroom-course - Railways Bg',
      logo:'Veranda Race - Classroom-course - Railways Logo'
    },
    {
      courseName:"TNPSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-tnpsc-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-tnpsc-logo.webp",
      name: "TNPSC Group II Prelims & Mains Offline Course",
      coachingMode: "1000+ hours classroom coaching",
      language: "30+ full mock tests",
      exam: "Bilingual monthly CA & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 39,000',
      strike:'₹ 46,800',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/tnpsc-group-ii-prelims-mains',
       altcourse:'Veranda Race - Classroom-course - TNPSC Bg',
      logo:'Veranda Race - Classroom-course - TNPSC Logo'

    },

    {
      courseName:"TNPSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-tnpsc-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-tnpsc-logo.webp",
      name: "TNPSC Group II Prelims (Tamil) Offline Course",
      coachingMode: "1000+ hours classroom coaching",
      language: "30+ full mock tests",
      exam: "Bilingual monthly CA & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 19,000',
      strike:'₹ 22,800',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/tnpsc-group-ii-prelims-tamil',
       altcourse:'Veranda Race - Classroom-course - TNPSC Bg',
      logo:'Veranda Race - Classroom-course - TNPSC Logo'

    },
    {
      courseName:"TNPSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-tnpsc-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-tnpsc-logo.webp",
      name: " TNPSC Group II Prelims (English) Offline Course",
      coachingMode: "1000+ hours classroom coaching",
      language: "30+ full mock tests",
      exam: "Bilingual monthly CA & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 19,000',
      strike:'₹ 22,800',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/tnpsc-group-ii-prelims-english',
       altcourse:'Veranda Race - Classroom-course - TNPSC Bg',
      logo:'Veranda Race - Classroom-course - TNPSC Logo'

    },
 
    {
      courseName:"Bank",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-bank-offline.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-bank-logo.webp",
      name: "Bank Offline  Course",
      coachingMode: "1000+ hours offline coaching",
      language: "30+ Bank & Insurance mock tests",
      exam: "Bank exam study materials",
      sessions: "Regular Banking mentor sessions",
      amount:'₹ 20,000',
      strike:'₹ 24,000',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/banking-offline-coaching',
       altcourse:'Veranda Race - Classroom-course - Bank Bg',
      logo:'Veranda Race - Classroom-course - Bank Logo'
    },
    {
      courseName:"SSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-scc-offline.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-ssc-logo.webp",
      name: "SSC Offline  Course",
      coachingMode: "1000+ hours offline coaching",
      language: "30+ SSC full mock tests",
      exam: "SSC exam study materials",
      sessions: "Regular SSC mentor sessions",
      amount:'₹ 21,000',
      strike:'₹ 25,200',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/ssc-offline-coaching',
       altcourse:'Veranda Race - Classroom-course - SSC Bg',
      logo:'Veranda Race - Classroom-course - SSC Logo'

    },
    {
      courseName:"TNUSRB",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-si-offline.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-tnusrb-logo.webp",
      name: "TNUSRB Offline Course",
      coachingMode: "1000+ hours classroom coaching",
      language: "30+ TNUSRB full mock tests",
      exam: "TNUSRB exam study materials",
      sessions: "Regular TNUSRB mentor sessions",
      amount:'₹ 17,000',
      strike:'₹ 20,400',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/tnusrb-si',
       altcourse:'Veranda Race - Classroom-course - TNUSRB Bg',
      logo:'Veranda Race - Classroom-course - TNUSRB Logo'

    },
    {
      courseName:"TNPSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-tnpsc-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-tnpsc-logo.webp",
      name: "TNPSC Online Course",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Bilingual monthly CA & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 13,500',
      strike:'₹ 17,000',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/tnpsc-tamil-online-live-classes',
       altcourse:'Veranda Race - Liveonline-course - TNPSC Bg',
      logo:'Veranda Race - Liveonline-course - TNPSC Logo'

    },
    {
      courseName:"TNPSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-tnpsc-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-tnpsc-logo.webp",
      name: "TNPSC 2 & 2A Mains Online Course",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Bilingual monthly CA & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 15,500',
      strike:'₹ 20,000',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/group2-2a-mains-online-classes',
       altcourse:'Veranda Race - Liveonline-course - TNPSC Bg',
      logo:'Veranda Race - Liveonline-course - TNPSC Logo'

    },
    {
      courseName:"Railways",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-rrb-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-rrb-logo.webp",
      name: "Railways Online Course",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Study materials & recorded classes",
      sessions: "Regular online mentor sessions",
      amount:'₹ 8,510',
      strike:'₹ 10,000',
      validitity:'3 Year Validity',
      percentage:'(26% off)',
      link:'/railways-online',
        altcourse:'Veranda Race - Liveonline-course - Railways Bg',
      logo:'Veranda Race - Liveonline-course - Railways Logo'

    },
    {
      courseName:"TNPSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-tnpsc-offline.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-tnpsc-logo.webp",
      name: "TNPSC Group 2 Prelims & Mains Online Course",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Bilingual monthly CA & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 20,000',
      strike:'₹ 24,000',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/tnpsc-group-2-prelims-cum-mains-online-course',
        altcourse:'Veranda Race - Liveonline-course - TNPSC Bg',
      logo:'Veranda Race - Liveonline-course - TNPSC Logo'

    },
    {
      courseName:"Bank",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-bank-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-bank-logo.webp",
      name: "Bank Online Course (Tamil)",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Digital materials & monthly CA",
      sessions: "Regular online mentor sessions",
      amount:'₹ 11,500',
      strike:'₹ 17,000',
      validitity:'3 Year Validity',
      percentage:'(32% off)',
      link:'/banking-tamil-online-live-classes',
       altcourse:'Veranda Race - Liveonline-course - Bank Bg',
      logo:'Veranda Race - Liveonline-course - Bank Logo'

    },
    {
      courseName:"Bank",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-bank-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-bank-logo.webp",
      name: "Bank Online Course (Kannada)",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Digital materials & monthly CA",
      sessions: "Regular online mentor sessions",
      amount:'₹ 10,000',
      strike:'₹ 14,000',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/bank-online-coaching-kannada',
       altcourse:'Veranda Race - Liveonline-course - Bank Bg',
      logo:'Veranda Race - Liveonline-course - Bank Logo'

    },
    {
      courseName:"Bank",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-bank-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-bank-logo.webp",
      name: "Bank Online Course (Malayalam)",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Digital materials & monthly CA",
      sessions: "Regular online mentor sessions",
      amount:'₹ 10,000',
      strike:'₹ 14,000',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/bank-online-coaching-malayalam',
       altcourse:'Veranda Race - Liveonline-course - Bank Bg',
      logo:'Veranda Race - Liveonline-course - Bank Logo'

    },
    {
      courseName:"SSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-ssc-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-ssc-logo.webp",
      name: "SSC Online Course (Tamil)",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Recorded videos & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 11,500',
      strike:'₹ 14,000',
      validitity:'3 Year Validity',
      percentage:'(18% off)',
      link:'/ssc-online-coaching-tamil',
       altcourse:'Veranda Race - Liveonline-course - SSC Bg',
      logo:'Veranda Race - Liveonline-course - SSC Logo'

    },
    {
      courseName:"SSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-ssc-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-ssc-logo.webp",
      name: "SSC Online Course (kannada)",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Recorded videos & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 11,000',
      strike:'₹ 14,000',
      validitity:'3 Year Validity',
      percentage:'(18% off)',
      link:'/ssc-online-coaching-kannada',
  altcourse:'Veranda Race - Liveonline-course - SSC Bg',
      logo:'Veranda Race - Liveonline-course - SSC Logo'
    },
    {
      courseName:"SSC",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-ssc-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-ssc-logo.webp",
      name: "SSC Online Course (Malayalam)",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Recorded videos & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 11,000',
      strike:'₹ 14,000',
      validitity:'3 Year Validity',
      percentage:'(18% off)',
      link:'/ssc-online-coaching-malayalam',
  altcourse:'Veranda Race - Liveonline-course - SSC Bg',
      logo:'Veranda Race - Liveonline-course - SSC Logo'
    },
    {
      courseName:"TNUSRB",
      images: "https://verandarace.com/verandarace-assets/assets/coursepage/bg-si-online.webp",
      image2: "https://verandarace.com/verandarace-assets/assets/coursepage/course-tnusrb-logo.webp",
      name: "TNUSRB Online Course",
      coachingMode: "1000+ hours of online classes",
      language: "30+ full online mock tests",
      exam: "Monthly CA & study materials",
      sessions: "Regular online mentor sessions",
      amount:'₹ 13,570',
      strike:'₹ 27,000',
      validitity:'3 Year Validity',
      percentage:'(20% off)',
      link:'/tnusrb-si-online',
  altcourse:'Veranda Race - Liveonline-course - TNUSRB Bg',
      logo:'Veranda Race - Liveonline-course - TNUSRB Logo'
    }
  ];

}
