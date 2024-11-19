import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent {

  selectedFaculty={
    imagePath:'',
    fullName:'',
    description:''
  }

  setData(data:any){
this.selectedFaculty={
  imagePath:data.imagePath,
  fullName:data.fullName,
  description:data.description
}
  }

  facultyList = [
    { fullName: 'Dr. Santhosh Babu IAS', imagePath: './assets/faculty/Santhosh Babu.png', description: "Dr Santhosh Babu IAS requires no introduction amongst the UPSC aspirant circle. An IAS officer of the 1995 batch, he is fondly known as the pride of Tamil Nadu. He is the Public Administration chief faculty of our Academy." },
    { fullName: 'Mr. Ilanchezhian', imagePath: './assets/faculty/Mr.K-M-Ilanchezhian.jpg', description: "Academic Committee headed by Mr Ilanchezhian - Veteran UPSC Trainer who himself a topper in the UPSC CAPF examination, has also appeared for three UPSC interviews. He has the rare distinction of clearing 17 highly competitive exams" },
    { fullName: 'Advocate M S Idris', imagePath: './assets/faculty/M S Idris.png', description: "Advocate M S Idris is a seasoned academic and an accomplished teacher with a vast reservoir of knowledge and experience. He is a guru epitomised for Shaping the Lives of those Who will shape the Nation." },
    { fullName: 'Mr. Chris Leonard Bernard', imagePath: './assets/faculty/chris.png', description: "Mr Chris Leonard Bernard is a Professional Educator, coordinating Civil Services Coaching programmes and Mentoring Civil Services Aspirants all over India. He seeks to simplify the UPSC Exam preparation for his students and become a proud enabler in their journey of emerging victorious in the Civil Services Exam." },
    { fullName: 'Sivraj M', post: 'Name of the Post 5', imagePath: './assets/faculty/Sivaraj M.png', description: "Sivraj M is a passionate and dynamic teacher with 9 years in training civil service aspirants. He’s the go-to person to understand and clear the CSAT exam." },
    { fullName: 'Adv. Manoj Madhav', imagePath: './assets/faculty/Manoj Madhav.png', description: "Adv. Manoj Madhav is a seasoned UPSC trainer who imbibes holistic education through his multiple exposures as an Adventurist & a Martial Artist." },
    { fullName: 'Mr. Parthiban', imagePath: './assets/faculty/parthiban.png', description: "Mr. Parthiban, with over seven years of experience in mentoring aspirants for various competitive exams such as UPSC Civil Services Examination, CAPF, IES, TNPSC, AE, AO, and Defence exams, he is dedicated to helping students achieve their goals. With UPSC mains examination experience, he hasan in-depth understanding of the UPSC exam pattern and its requirements." },
    { fullName: 'Mr Rajesh Alagumani', imagePath: './assets/faculty/Mr.Rajesh-Alagumani.jpg', description: "Mr Rajesh Alagumani is a renowned teacher in Environmental Science, Agriculture, Geography and BioScience. He is a Topper in UPSC CAPF Exam and was selected as an Assistant Commandant in Border Security Forces. He has appeared for UPSC Interview twice." },
    { fullName: 'Mr Prithvi Kumar', imagePath: './assets/faculty/Prithvi Kumar.png', description: "Mr Prithvi Kumar is a Marine Engineer and a Former Naval Officer. He is an expert in Economics, General Science, Post-Independence Contemporary History and Science and Technology." },
    { fullName: 'Mr Aashiq Mohammed', imagePath: './assets/faculty/Aashiq Mohammed.png', description: "Mr Aashiq Mohammed is a renowned teacher and a coach; he has rich experience in teaching and mentoring civil services aspirants all over India. He seeks to simplify exam preparation for his students. He has appeared twice in the UPSC Civil Services Mains Examination and attended the UPSC Interview." },
    { fullName: 'Ms. Carol Prima D’ Souza', imagePath: './assets/faculty/Carol Prima DSouza.png', description: "Ms. Carol Prima D’ Souza is a passionate teacher and an expert in Essay Writing, Post-Independence Indian History, Agro-Economics, Disaster Management and Current Affairs." },
    { fullName: 'Mr Siddharth Dagar', imagePath: './assets/faculty/Siddhrath Dagar.png', description: "Mr Siddharth Dagar is a renowned Delhi-based UPSC Educator; he has rich experience in teaching and mentoring civil services aspirants all over India. He has trained 4000 students on average for the last 3 years." },
    { fullName: 'Ms Anne Roopa D’Souza', imagePath: './assets/faculty/Ms.Anne-Roopa-D’Souza.jpg', description: "Ms Anne Roopa D’Souza is a dedicated, resourceful and goal-driven professional educator and a Karnataka Administrative Service Officer. Currently, serving in the Accounts and Audit Department, Govt. of Karnataka." },
    { fullName: 'Mr Shanmugapriyan', imagePath: './assets/faculty/Shanmugapriyan S.png', description: "Mr Shanmugapriyan is a passionate teacher. He holds a Degree in Engineering and Masters in Political Science. He is an expert in CSAT. Often referred to as The Wizard of Reasoning by his students, Shanmugapriyan brings four years of rich experience in handling aptitude classes for various competitive exams across various institutes all over India" },
    { fullName: 'Mr Steuban Xavier Dias', imagePath: './assets/faculty/Steuban Xavier Dias.png', description: "Mr Steuban Xavier Dias is a renowned UPSC Educator and Mentor; He hails from Udupi and has years of rich experience in teaching and mentoring civil services aspirants all over India." },
    { fullName: 'Mr Ram Sudhir', imagePath: './assets/faculty/Ram Sudhir.png', description: "Mr Ram Sudhir is a renowned teacher and a coach; he has nearly a decade of rich experience in teaching and mentoring civil services aspirants all over India. He seeks to simplify the exam preparation for his students and become a proud enabler in their journey of emerging victorious in the UPSC Civil Services." },
  ];

}
