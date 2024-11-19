import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IasWeekendEveningLpComponent } from './ias-weekend-evening-lp.component';

describe('IasWeekendEveningLpComponent', () => {
  let component: IasWeekendEveningLpComponent;
  let fixture: ComponentFixture<IasWeekendEveningLpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IasWeekendEveningLpComponent]
    });
    fixture = TestBed.createComponent(IasWeekendEveningLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
