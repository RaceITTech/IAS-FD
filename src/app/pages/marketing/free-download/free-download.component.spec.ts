import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDownloadComponent } from './free-download.component';

describe('FreeDownloadComponent', () => {
  let component: FreeDownloadComponent;
  let fixture: ComponentFixture<FreeDownloadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeDownloadComponent]
    });
    fixture = TestBed.createComponent(FreeDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
