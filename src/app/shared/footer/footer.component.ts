import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentUrl:string = '';

  constructor(private location: Location) { }

  ngOnInit() {
    this.currentUrl = this.location.path();
  }

}
