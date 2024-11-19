import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendEveningLpComponent } from './weekend-evening-lp.component';

describe('WeekendEveningLpComponent', () => {
  let component: WeekendEveningLpComponent;
  let fixture: ComponentFixture<WeekendEveningLpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekendEveningLpComponent]
    });
    fixture = TestBed.createComponent(WeekendEveningLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
