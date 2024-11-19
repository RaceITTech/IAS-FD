import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsWeekendEveningLpComponent } from './ips-weekend-evening-lp.component';

describe('IpsWeekendEveningLpComponent', () => {
  let component: IpsWeekendEveningLpComponent;
  let fixture: ComponentFixture<IpsWeekendEveningLpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpsWeekendEveningLpComponent]
    });
    fixture = TestBed.createComponent(IpsWeekendEveningLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
