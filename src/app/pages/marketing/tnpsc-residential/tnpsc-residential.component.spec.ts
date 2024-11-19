import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpscResidentialComponent } from './tnpsc-residential.component';

describe('TnpscResidentialComponent', () => {
  let component: TnpscResidentialComponent;
  let fixture: ComponentFixture<TnpscResidentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnpscResidentialComponent]
    });
    fixture = TestBed.createComponent(TnpscResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
