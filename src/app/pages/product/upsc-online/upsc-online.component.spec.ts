import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpscOnlineComponent } from './upsc-online.component';

describe('UpscOnlineComponent', () => {
  let component: UpscOnlineComponent;
  let fixture: ComponentFixture<UpscOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpscOnlineComponent]
    });
    fixture = TestBed.createComponent(UpscOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
