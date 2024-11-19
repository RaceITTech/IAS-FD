import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class StudentAuthService {
  private isLoggedInStatusStudent = false;
  private sessionTimeoutStudent: any;

  constructor(private router: Router) {
    this.checkSessionStudent();  // Check session validity on service initialization
  }

loginStudent(status:boolean): boolean {
  if (status) {
    localStorage.setItem('authTokenStudent', 'dummyTokenStudent');  // Store dummy token
    this.isLoggedInStatusStudent = true;
    this.startsessionTimeoutStudent();  // Start the session timeout
    return true;  // Indicate successful login
  } else {
    console.error('Login failed: Invalid credentials');
    return false;  // Indicate failed login
  }
}

  logoutStudent(): void {
  localStorage.removeItem('authTokenStudent'); // Remove token
    clearTimeout(this.sessionTimeoutStudent);  // Clear the session timeout
    this.isLoggedInStatusStudent = false;
    this.router.navigate(['students']);
  }

  isLoggedInStudent(): boolean {
    return this.isLoggedInStatusStudent || !!localStorage.getItem('authTokenStudent');  // Check token presence
  }

  public checkSessionStudent(): void {
    const token = localStorage.getItem('authTokenStudent');
    if (token) {
      this.isLoggedInStatusStudent = true;
      this.startsessionTimeoutStudent();
    } else {
      this.logoutStudent();
    }
  }

  private startsessionTimeoutStudent(): void {
    // Example: Set session timeout to 30 minutes (1800000 ms)
    this.sessionTimeoutStudent = setTimeout(() => {
      this.logoutStudent();  // Automatically log out the user after timeout
    }, 1800000);
  }
}
