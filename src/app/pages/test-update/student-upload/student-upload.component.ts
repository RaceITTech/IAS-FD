import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-upload',
  templateUrl: './student-upload.component.html',
  styleUrls: ['./student-upload.component.scss'],
})
export class StudentUploadComponent {

  studentsData: any[] = [];

  tests: any[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get('https://backend.verandaias.com/verandaias/users/getStudentData')
      .subscribe((response: any) => {
        this.studentsData=response.data
      });
    this.http
      .get('https://backend.verandaias.com/verandaias/users/getTests')
      .subscribe((response: any) => {
        this.tests = response.data;
      });
  }

  selectedStudent: string = '';
  selectedMobileNo:any
  selectedRollNo: string = '';

  onStudentChange(selectedName: string) {
    this.otpStatus=''
    const student = this.studentsData.find((s) => s.name === selectedName);
    if (student) {
      this.selectedMobileNo = student.mobileNo
      this.selectedRollNo = student.rollNumber;
    }
  }

  otpStatus=''
mobObj = {
  phonenumber: ''
};
sentotp:any
enteredOtp:any
otpResend=true

getOtp(){
  if(this.selectedMobileNo){
    this.mobObj = {
      phonenumber: this.selectedMobileNo,
    }
    this.http.post('https://backend.raceinstitute.in/veranda/otp_verified', this.mobObj)
    .subscribe((response: any) => {
      if (response.otp) {
        this.sentotp = response.otp;
        this.otpStatus='Sent'
      }
    });
  }
  else{
    alert(
      'Missing Mobile Number'
    );
  }
}
onInputChange(data: any) {
  this.enteredOtp=data
}

verifyOtp() {
  if (this.sentotp === this.enteredOtp) {
    this.otpStatus='Verified'
  }
  else{
    this.otpStatus='inValid'
  }
}
resendOtp() {
  this.http.post('https://backend.raceinstitute.in/veranda/otp_verified', this.mobObj)
    .subscribe((response: any) => {
      if (response.otp) {
        this.otpResend=false
        this.sentotp = response.otp;
        this.otpStatus='reSent'
        setTimeout(() => {
          this.otpResend=true
        }, 60000);
      }
      else {
        setTimeout(() => { 
          this.otpResend = true
        }, 60000);
      }
    })
}

  testDetails: any[] = [];

  selectedTest: string = '';
  selectedDate: string = '';

  onTestChange(selectedTest: string) {
    const test = this.tests.find((t) => t.test === selectedTest);
    if (test) {
      this.selectedDate = test.date;
    }
  }

  testName = '';

  submitClicked=false

  onSubmit(form: NgForm) {
    this.testName = form.value.testName;

    let checkObj = {
      enrollNo: this.selectedRollNo,
      test: this.testName,
    };

    this.http
      .post(
        'https://backend.verandaias.com/verandaias/users/checkData',
        checkObj
      )
      .subscribe(
        (response: any) => {
          if (response.success === true) {
            Swal.fire({
              icon: 'question',
              title: 'Oops...',
              text: 'User already updated this test',
              confirmButtonText: 'OK',
            }).then(() => {
              window.location.reload();
              // form.resetForm();
            });
          }
        },
        (error) => {
          if (error.error.success === false) {
            this.http
              .post(
                'https://backend.verandaias.com/verandaias/users/getTestData',
                { test: form.value.testName }
              )
              .subscribe((response: any) => {
                if (response.success === true) {
                  this.testDetails = response.data[0].tableData;
                  this.openModal();
                }
              });
          }
        }
      );
  }

  openModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement, {
        backdrop: 'static', // Prevent closing on click outside
        keyboard: false, // Prevent closing with ESC key
      });
      modal.show();
    }
  }

  keyPress(event: any) {
    const pattern = /^[0-9]$/; // Only allow numeric characters
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  calculateRightMarks(data: any) {
    const totalAnswers =
      (Number(data.correct) || 0) + (Number(data.wrong) || 0);
    if (totalAnswers > data.noOfQuestions) {
      alert(
        'The total of correct and wrong answers cannot exceed the number of questions.'
      );
      data.correct = null; // Optionally, reset the correct field
      data.rightMarks = 0;
      this.calculateTotalMarks(data);
      this.calculateAccuracy(data);
      return;
    }

    if (data.correct === null || data.correct === '') {
      data.rightMarks = 0;
    } else {
      if (data.level.toLowerCase().includes('csat')) {
        data.rightMarks = Number(data.correct) * 2.5;
      } else {
        data.rightMarks = Number(data.correct) * 2;
      }
    }

    // Calculate total marks
    this.calculateTotalMarks(data);
    this.calculateAccuracy(data);

    const index = this.testDetails.findIndex(
      (item) => item.subject === data.subject && item.level === data.level
    );
    if (index !== -1) {
      this.testDetails[index].rightMarks = data.rightMarks;
      this.testDetails[index].totalMarks = data.totalMarks;
      this.testDetails[index].accuracy = data.accuracy;
    }
  }

  calculateWrongMarks(data: any) {
    const totalAnswers =
      (Number(data.correct) || 0) + (Number(data.wrong) || 0);
    if (totalAnswers > data.noOfQuestions) {
      alert(
        'The total of correct and wrong answers cannot exceed the number of questions.'
      );
      data.wrong = null;
      data.wrongMarks = 0;
      this.calculateTotalMarks(data);
      this.calculateAccuracy(data);
      return;
    }

    if (data.wrong === null || data.wrong === '') {
      data.wrongMarks = 0;
    } else {
      if (data.level.toLowerCase().includes('csat')) {
        data.wrongMarks = parseFloat((Number(data.wrong) * -0.83).toFixed(2));
      } else {
        data.wrongMarks = parseFloat((Number(data.wrong) * -0.66).toFixed(2));
      }
    }

    // Calculate total marks
    this.calculateTotalMarks(data);
    this.calculateAccuracy(data);

    // Update the corresponding object in the array
    const index = this.testDetails.findIndex(
      (item) => item.subject === data.subject && item.level === data.level
    );
    if (index !== -1) {
      this.testDetails[index].wrongMarks = data.wrongMarks;
      this.testDetails[index].totalMarks = data.totalMarks;
      this.testDetails[index].accuracy = data.accuracy;
    }
  }

  calculateTotalMarks(data: any) {
    data.totalMarks = parseFloat(
      ((data.rightMarks || 0) + (data.wrongMarks || 0)).toFixed(2)
    );
  }

  calculateAccuracy(data: any) {
    const totalAnswers = (Number(data.correct) || 0) + (Number(data.wrong) || 0);
    data.accuracy = totalAnswers > 0 ? parseFloat((((Number(data.correct) || 0) / totalAnswers) * 100).toFixed(2)) : null;
  }

  private levelMapping: { [key: string]: string } = {
    'Basic Applied': 'basicApplied',
    'Elementary': 'elementary',
    'CA_Economy': 'ca_economy',
    'CA_Environment': 'ca_environment',
    'CA_Geography': 'ca_geography',
    'CA_Misc': 'ca_misc',
    'CA_IR': 'ca_ir',
    'CA_History': 'ca_history',
    'CA_Sci & Tech': 'ca_sci_tech',
    'CA_Polity': 'ca_polity',
    'Explorative': 'explorative',
    'Creative': 'creative',
    'CSAT': 'csat',
    'CA_Art & Culture': 'ca_art_culture'
  };

updateClicked = false

  saveChanges(form: NgForm) {

    this.updateClicked = true

    let updateObj = {
      studentName: this.selectedStudent,
      enrollNo: this.selectedRollNo,
      test: this.testName,
      date: this.selectedDate,
      testData: this.testDetails.map(item => ({
        ...item,
        level: this.levelMapping[item.level] || item.level // Replace with mapped value or keep original if not found
      }))
    };

    this.http.post('https://backend.verandaias.com/verandaias/users/createRDTestData',updateObj).subscribe((response: any) => {
        if (response.success === true) {
          this.http.post('https://backend.verandaias.com/verandaias/users/getRDTestsData',{}).subscribe((data: any) => {
            if (data.success === true) {
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Data has been saved successfully.',
                confirmButtonText: 'OK',
              }).then(() => {
                window.location.reload();
              });
            }
          });
        }
      });
      
  }
}
