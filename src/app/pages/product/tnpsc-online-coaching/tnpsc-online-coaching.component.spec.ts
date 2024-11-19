import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpscOnlineCoachingComponent } from './tnpsc-online-coaching.component';

describe('TnpscOnlineCoachingComponent', () => {
  let component: TnpscOnlineCoachingComponent;
  let fixture: ComponentFixture<TnpscOnlineCoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnpscOnlineCoachingComponent]
    });
    fixture = TestBed.createComponent(TnpscOnlineCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
