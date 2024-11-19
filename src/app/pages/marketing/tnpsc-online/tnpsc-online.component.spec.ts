import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpscOnlineComponent } from './tnpsc-online.component';

describe('TnpscOnlineComponent', () => {
  let component: TnpscOnlineComponent;
  let fixture: ComponentFixture<TnpscOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnpscOnlineComponent]
    });
    fixture = TestBed.createComponent(TnpscOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
