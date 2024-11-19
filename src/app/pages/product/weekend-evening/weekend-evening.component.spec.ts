import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendEveningComponent } from './weekend-evening.component';

describe('WeekendEveningComponent', () => {
  let component: WeekendEveningComponent;
  let fixture: ComponentFixture<WeekendEveningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekendEveningComponent]
    });
    fixture = TestBed.createComponent(WeekendEveningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
