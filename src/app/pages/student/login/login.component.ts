import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentAuthService } from 'src/app/services/student/student-auth.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // username: string = '';
  // password: string = '';
  // loginError: string = '';

  // constructor(private authService: StudentAuthService, private router: Router, private http: HttpClient) {}

  // onLogin(): void {

  //   let obj = {
  //     "email_id":this.username,
  //     "password":this.password
  //   }

  //   this.http.post("https://backend.verandaias.com/verandaias/users/checkUser",obj).subscribe((response: any) => {
  //     if(response){
  //       if (this.authService.loginStudent(response.success)) {
  //         console.log(response)
  //         // localStorage.setItem('userEmail', this.username);
  //         // localStorage.setItem('userLevel', response.level);
  //         this.router.navigate(['students/dashboard']);
  //   } else {
  //     this.loginError = 'Invalid username or password';
  //   }
  //     }
  //   });
  // }

  studentsData: any[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get('https://backend.verandaias.com/verandaias/users/getStudentData')
      .subscribe((response: any) => {
        this.studentsData=response.data
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
                }
              });
          }
        }
      );
  }

}
