import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-available-tests',
  templateUrl: './available-tests.component.html',
  styleUrls: ['./available-tests.component.scss']
})
export class AvailableTestsComponent {

  tests: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://backend.verandaias.com/verandaias/users/getRDTestInfo').subscribe((response: any) => {
      this.tests = response.data
      console.log(this.tests)
      });
  }

}
