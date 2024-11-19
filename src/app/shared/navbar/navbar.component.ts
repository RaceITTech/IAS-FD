import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navLinks = [
    { path: '/courses', label: 'Courses' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/free-download', label: 'Resources' },
    { path: '/about-us', label: 'About Us' },
    { path: '/contact-us', label: 'Contact Us' }
  ];

}
