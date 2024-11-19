import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})

export class CreateTestComponent implements OnInit{

  submitClicked = false

  subjects: string[] = [
    "Ancient History",
    "Art & Culture",
    "Economy",
    "Environment",
    "Geography",
    "Medieval History",
    "Modern History",
    "Polity"
  ];

  // onSubjectChange() {
  //   if (this.selectedSubject) {
  //     if (this.testDetails.length > 0) {
  //       this.testDetails.forEach(detail => {
  //         detail.subject = this.selectedSubject;
  //       });
  //     }
  //   }
  //   console.log(this.testDetails)
  // }

  // selectedSubject: string = '';

  isSelected(subject: string): boolean {
    return this.selectedSubjects.includes(subject);
  }
  
  onCheckboxChange(event: Event, subject: string) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedSubjects.push(subject);
    } else {
      this.selectedSubjects = this.selectedSubjects.filter(item => item !== subject);
    }
    console.log(this.selectedSubjects)
  }

  selectedSubjects: string[] = [];

  levels: string[] = [
    "Elementary",
    "Basic Applied",
    "Explorative",
    "Creative",
    "Csat_Quantitative aptitude",
    "Csat_Reasoning",
    "Csat_Reading Comprehension",
    "CA_Art & Culture",
    "CA_Economy",
    "CA_Environment",
    "CA_Geography",
    "CA_History",
    "CA_IR",
    "CA_MISC",
    "CA_Polity",
    "CA_Sci & Tech"
  ]

  testDetails: any[] = [{ subject:'', level: '', noOfQuestions: '', maxMarks: '' }];

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  keyPress(event: any) {
    const pattern = /[0-9 ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  calculateMaxMarks(index: number, noOfQuestions: string) {

    const selectedLevel = this.testDetails[index].level.toLowerCase();
    const isCsatLevel = selectedLevel.includes('csat');
    console.log(isCsatLevel)

    const marksPerQuestion = isCsatLevel ? 2.5 : 2; // 2 marks for other levels
  
    this.testDetails[index].maxMarks = noOfQuestions ? (Number(noOfQuestions) * marksPerQuestion).toString() : '';

  }

  addSubject() {
    this.testDetails.push({ subject: '', level: '', noOfQuestions: '', maxMarks: '' });
  }

  removeSubject(index: number) {
    if (this.testDetails.length > 1) {
      this.testDetails.splice(index, 1);
    }
  }

  onSubmit(form: NgForm) {

    this.submitClicked = true

    if (form.valid) {
      const formData = form.value;
      // Format data
      const requestObj = {
        test: formData.test,
        date: formData.date,
        subject: this.selectedSubjects,
        tableData: this.testDetails.map(detail => ({
          subject: detail.subject,
          level: detail.level,
          noOfQuestions: detail.noOfQuestions,
          maxMarks : detail.maxMarks
        })),
        ectDate: `${formData.ectDateStart} to ${formData.ectDateEnd}`
      };

      console.log(requestObj)

      // Send to API
      this.http.post('https://backend.verandaias.com/verandaias/users/rd-test-upload', requestObj).subscribe((response:any) => {
        if(response.success === true){
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Test created successfully.',
            confirmButtonText: 'OK'
          }).then(() => {
            // Reset form and data after successful submission
            form.resetForm();
            this.testDetails = [{ subject: '', level: '', noOfQuestions: '' }];
            this.submitClicked = false
          });
        }
      });
    }
  }  

}
