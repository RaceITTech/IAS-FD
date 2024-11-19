import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTestUpdateComponent } from './student-test-update.component';

describe('StudentTestUpdateComponent', () => {
  let component: StudentTestUpdateComponent;
  let fixture: ComponentFixture<StudentTestUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentTestUpdateComponent]
    });
    fixture = TestBed.createComponent(StudentTestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
