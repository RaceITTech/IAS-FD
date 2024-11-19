import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductLeadService } from 'src/app/services/product-lead.service';
import { ProductDetails, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-iop',
  templateUrl: './iop.component.html',
  styleUrls: ['./iop.component.scss']
})

export class IopComponent{

  courseData: ProductDetails | undefined;
  ZBookAccessToken: any;
  leads!: { data: { First_Name: any; Last_Name: any; Email: any; Mobile: string; Vertical: string; Language: string; Lead_Source: string; Sub_Category: string; Location: any; States: any; Source_Website: string; Primary_Lead_Source: string; Channel: string; Lead_Status: string; URL1: string; UTM_Campaign: string | null; UTM_Medium: string | null; UTM_Source: string | null; Campaign_ID: string | null; Ad_Group_ID: string | null; Ad_ID: null; Search_Term: string | null; CPC: null; GCLID_Custom: string | null; Course: string; }[]; trigger: string[]; lar_id: number; };
  leaddata!: { data: { Attribute: string; Value: any; }[]; };

  constructor(private router:Router,private productService:ProductService){ 
    this.loadCourseData();
  }

  private loadCourseData(): void {
    this.productService.getProductDetails("GI001").subscribe({
      next: (value) => {
        this.courseData = this.productService.setCourseDetails(value);
        console.log("data",this.courseData)
      },
      error: (err) => {
        alert("Error loading page");
      }
    });
  }

  onBuyClick(): void {
    this.router.navigateByUrl('/payment')
  }

  previewBooks() {
    // URL of the PDF you want to preview
    const pdfUrl = '/assets/planner-pdf/STK-planner.pdf';
    window.open(pdfUrl, '_blank');  
  }

  starMentors = [
    {
      description: 'An advocate by profession, he is a seasoned academic and an accomplished teacher with a vast reservoir of knowledge and experience. ‘Shaping the lives of those Who will shape the nation’ has been the tagline he is known for. Adv. Idris Sir is one such faculty who has been actively involved in shaping students’ UPSC dreams for over a decade. He is also a practising lawyer for the past 17 years and has the perfect understanding of the challenges and requisites of UPSC Civil Services Exam preparation.',
      title: 'Mr. M. S. Idris'
    },
    {
      description: 'With his extraordinary journey from an unassuming background to becoming a beacon of ethical leadership, he exemplified the potential of the human spirit. His commitment to truth, justice and compassion continues to inspire generations of civil service aspirants at Veranda IAS and beyond. As India seeks leaders who can navigate complex challenges with unwavering integrity, Mr. Sagayam\'s legacy remains a guiding light for the Indian youth striving to impact society positively. Now a star faculty at Veranda IAS, his engaging lectures on ethics inspire civil service aspirants.',
      title: 'Mr. U. Sagayam IAS (VR)'
    },
    {
      description: 'A topper in the UPSC CAPF Examination, he has also appeared for three UPSC CSE interviews. He has the rare distinction of clearing 17 highly Indian competitive exams. He is hailed as one of India’s foremost faculty of Geography for the Civil Services Examination (CSE). He was bestowed the 2019 CSR Award for Excellence in the field of Education on Civil Services Day.',
      title: 'Mr. Ilanchezhian'
    },
    {
      description: 'A passionate and dynamic teacher with over 9 years in training civil service aspirants, he is the go-to faculty to understand and clear the UPSC CSAT exam. Under his expert guidance, students gain a deep understanding of the CSAT concepts but also developed problem-solving skills that proved to be crucial during the actual CSAT exam. His teaching style is nothing short of captivating, as he effortlessly breaks down complex topics into easily digestible bits, making learning a delightful experience.',
      title: 'Mr. M. Sivaraj'
    },
    {
      description: 'Mrs. Priya Krishnan is an exceptionally dynamic and driven trainer with over two decades of experience in honing the skills of individuals from diverse backgrounds. From engineering graduates to corporate executives in power and automobile industries, she has successfully trained hospitality and aviation trainees, curriculum-based teachers and employees from various industrial sectors. Her expertise lies in soft skills training, specialising in accent neutralisation, communication and personality development for interview success.',
      title: 'Mrs. Priya Krishnan'
    }
  ];

  testimonials = [
    {
      message: 'Under the guidance of able Veranda IAS mentors, I was prepared to face any contingencies. I have been one of the beneficiaries of the Integrated Online Programme of Veranda IAS. It gave me the much-needed focus and confidence to take the final personality test.',
      name: 'Sivakrishna Moorthy',
      position: 'IAS - AIR 207'
    },
    {
      message: 'The personality test at UPSC plays an essential role in our selection. The role of Veranda IAS was crucial in my UPSC journey. They were one of the main pillars for me to reach the Indian Revenue Service through Classroom Programme. They made me understand the nature of personality tests.',
      name: 'Venkatesh',
      position: 'IRS - AIR 534'
    },
    {
      message: 'The interview guidance was beneficial to me and helped in achieving a good score in the interview. The interview panel had senior retired bureaucrats who had molded how I delivered the answers. Starting from delivery to the pace and the choice of words, the guidance was instrumental and helped me in facing the UPSC board without any fear.',
      name: 'Sindhu Kavi',
      position: 'IAS - AIR 504'
    },
    {
      message: 'The right mentoring from Veranda IAS helped me ease the UPSC learning process. Their classroom sessions with experienced faculty and accomplished mentors were really useful to crack the UPSC exam.',
      name: 'Saravanan',
      position: 'IPS - AIR 494'
    }
  ];

  faqs = [
    {
      question: 'Can T join Veranda IAS Integrated Online Programme once it has started ?',
      answer: "Yes, you can join the Veranda IAS Integrated Online Programme after it has started. We'll provide you with all the recordings of the previous classes"
    },
    {
      question: 'What will the alternate day mentorship sessions entail ?',
      answer: 'Alternate day mentorship sessions will be handled by our expert Veranda IAS mentors on alternate day basis. Students will have an opportunity to clarify their persisting doubts cleared, discuss questions and attend impromptu VIVA and quiz sessions'
    },
    {
      question: 'When are the Star Faculty Mentorship sessions scheduled ?',
      answer: 'The Star Faculty Mentorships are scheduled on weekends (Saturday & Sunday)'
    }
  ];

}
