import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;
  private sessionTimeout: any;

  constructor(private router: Router) {
    this.checkSession();  // Check session validity on service initialization
  }

login(status:boolean): boolean {
  if (status) {
    localStorage.setItem('authToken', 'dummyToken');  // Store dummy token
    this.isLoggedInStatus = true;
    this.startSessionTimeout();  // Start the session timeout
    return true;  // Indicate successful login
  } else {
    console.error('Login failed: Invalid credentials');
    return false;  // Indicate failed login
  }
}

  logout(): void {
  localStorage.removeItem('authToken'); // Remove token
  localStorage.removeItem('userEmail'); // Remove additional items if needed
  localStorage.removeItem('userLevel');  // Remove additional items if needed
    clearTimeout(this.sessionTimeout);  // Clear the session timeout
    this.isLoggedInStatus = false;
    this.router.navigate(['admin']);
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus || !!localStorage.getItem('authToken');  // Check token presence
  }

  public checkSession(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isLoggedInStatus = true;
      this.startSessionTimeout();
    } else {
      this.logout();
    }
  }

  private startSessionTimeout(): void {
    // Example: Set session timeout to 30 minutes (1800000 ms)
    this.sessionTimeout = setTimeout(() => {
      this.logout();  // Automatically log out the user after timeout
    }, 1800000);
  }
}
