import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopComponent } from './iop.component';

describe('IopComponent', () => {
  let component: IopComponent;
  let fixture: ComponentFixture<IopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IopComponent]
    });
    fixture = TestBed.createComponent(IopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
