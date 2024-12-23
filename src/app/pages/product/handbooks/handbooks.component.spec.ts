import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbooksComponent } from './handbooks.component';

describe('HandbooksComponent', () => {
  let component: HandbooksComponent;
  let fixture: ComponentFixture<HandbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandbooksComponent]
    });
    fixture = TestBed.createComponent(HandbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
