import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWebinarComponent } from './register-webinar.component';

describe('RegisterWebinarComponent', () => {
  let component: RegisterWebinarComponent;
  let fixture: ComponentFixture<RegisterWebinarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterWebinarComponent]
    });
    fixture = TestBed.createComponent(RegisterWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});