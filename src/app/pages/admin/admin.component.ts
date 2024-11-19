import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/admin/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.checkSession();  // Check if user is still logged in on app initialization
  }

}
