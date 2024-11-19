import { Component } from '@angular/core';

@Component({
  selector: 'app-upsc-opputunities',
  templateUrl: './upsc-opputunities.component.html',
  styleUrls: ['./upsc-opputunities.component.scss']
})
export class UpscOpputunitiesComponent {

  services = [
    'Indian Administrative Service',
    'Indian Foreign Service',
    'Indian Police Service',
    'Indian Forest Service',
    'Indian Revenue Service',
    'Indian Audit and Accounts Service',
    'Indian Civil Accounts Service',
    'Indian Corporate Law Service',
    'Indian Defence Accounts Service',
    'Indian Information Service',
    'Indian Postal Service',
    'Indian Railway Management Service',
    'Indian Railway Protection Force Service',
    'Pondicherry Civil Service (Group B)',
    'Pondicherry Police Service (Group B)'
  ];

}
