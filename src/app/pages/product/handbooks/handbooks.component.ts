import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-handbooks',
  templateUrl: './handbooks.component.html',
  styleUrls: ['./handbooks.component.scss']
})

export class HandbooksComponent{

  constructor(
    private router:Router
    ) { 
   }

  ngOnInit(): void {
  
  }

  previewBooks() {
    // URL of the PDF you want to preview
    const pdfUrl = '/assets/planner-pdf/STK-planner.pdf';
    window.open(pdfUrl, '_blank');  
  }

  onBuyClick(): void {
    
  }

  faqs = [
    {
      question: 'Are there solved UPSC CSE Prelims PYQs available in these books?',
      answer: 'Yes, this book has topic-wise solved UPSC Prelims PYQs from 2015 to 2022. Explanations and its relevance with that particular year’s current affairs is also provided'
    },
    {
      question: 'Do these books have practice questions for mains?',
      answer: 'Yes, these books have practice questions for mains examinations as well as preliminary examinations'
    },
    {
      question: 'Name of the subjects for which the books are available?',
      answer: 'World History, Indian Polity, Modern Indian History, International Relations, Internal Security, Governance, Geography Ethics, Environment, Art & Culture, Ancient & Medieval Indian History, Indian Economy, Science and technology'
    }
  ];

}