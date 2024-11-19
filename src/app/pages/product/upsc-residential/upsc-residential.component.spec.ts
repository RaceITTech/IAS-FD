import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpscResidentialComponent } from './upsc-residential.component';

describe('UpscResidentialComponent', () => {
  let component: UpscResidentialComponent;
  let fixture: ComponentFixture<UpscResidentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpscResidentialComponent]
    });
    fixture = TestBed.createComponent(UpscResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
