import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpscPrelimsComponent } from './upsc-prelims.component';

describe('UpscPrelimsComponent', () => {
  let component: UpscPrelimsComponent;
  let fixture: ComponentFixture<UpscPrelimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpscPrelimsComponent]
    });
    fixture = TestBed.createComponent(UpscPrelimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
