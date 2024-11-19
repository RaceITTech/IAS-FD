import { Component } from '@angular/core';
import { StudentAuthService } from 'src/app/services/student/student-auth.service'; 

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor(private authService: StudentAuthService) {}

  ngOnInit(): void {
    this.authService.checkSessionStudent();  // Check if user is still logged in on app initialization
  }

}
