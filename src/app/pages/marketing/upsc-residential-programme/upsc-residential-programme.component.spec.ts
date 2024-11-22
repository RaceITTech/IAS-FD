import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpscResidentialProgrammeComponent } from './upsc-residential-programme.component';

describe('UpscResidentialProgrammeComponent', () => {
  let component: UpscResidentialProgrammeComponent;
  let fixture: ComponentFixture<UpscResidentialProgrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpscResidentialProgrammeComponent]
    });
    fixture = TestBed.createComponent(UpscResidentialProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
