import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpscOpputunitiesComponent } from './upsc-opputunities.component';

describe('UpscOpputunitiesComponent', () => {
  let component: UpscOpputunitiesComponent;
  let fixture: ComponentFixture<UpscOpputunitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpscOpputunitiesComponent]
    });
    fixture = TestBed.createComponent(UpscOpputunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
