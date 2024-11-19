import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/admin/auth.service';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent {

  currentUrl:string = '';

  constructor(private authService: AuthService,private location: Location) { }

  ngOnInit() {
    this.currentUrl = this.location.path();
  }

  onLogout(): void {
  this.authService.logout();
  }

}
