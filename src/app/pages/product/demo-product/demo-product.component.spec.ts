import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProductComponent } from './demo-product.component';

describe('DemoProductComponent', () => {
  let component: DemoProductComponent;
  let fixture: ComponentFixture<DemoProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoProductComponent]
    });
    fixture = TestBed.createComponent(DemoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
