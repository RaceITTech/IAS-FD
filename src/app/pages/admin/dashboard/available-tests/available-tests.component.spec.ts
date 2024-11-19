import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTestsComponent } from './available-tests.component';

describe('AvailableTestsComponent', () => {
  let component: AvailableTestsComponent;
  let fixture: ComponentFixture<AvailableTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableTestsComponent]
    });
    fixture = TestBed.createComponent(AvailableTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
