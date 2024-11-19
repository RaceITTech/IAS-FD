import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  isSidenavOpen = true;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  userLevel : any ;

  currentComponent: any ;

  ngOnInit(): void {
    this.userLevel = localStorage.getItem('userLevel');
    this.loadMenu()
  }

  loadMenu(){
    if(this.userLevel==="admin"){
      this.currentComponent = 'createTest';
    }
    else if(this.userLevel==="mentor"){
      this.currentComponent = 'studentTestUpdate'
    }
  }

  selectComponent(component: string): void {
    this.currentComponent = component;
  }

}
