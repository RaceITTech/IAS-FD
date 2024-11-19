import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/admin/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  onLogin(): void {

    let obj = {
      "email_id":this.username,
      "password":this.password
    }

    this.http.post("https://backend.verandaias.com/verandaias/users/checkUser",obj).subscribe((response: any) => {
      if(response){
        if (this.authService.login(response.success)) {
          console.log(response)
          localStorage.setItem('userEmail', this.username);
          localStorage.setItem('userLevel', response.level);
          this.router.navigate(['admin/dashboard']);
    } else {
      this.loginError = 'Invalid username or password';
    }
      }
    });
  }
}
