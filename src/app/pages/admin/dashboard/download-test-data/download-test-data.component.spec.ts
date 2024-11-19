import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadTestDataComponent } from './download-test-data.component';

describe('DownloadTestDataComponent', () => {
  let component: DownloadTestDataComponent;
  let fixture: ComponentFixture<DownloadTestDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadTestDataComponent]
    });
    fixture = TestBed.createComponent(DownloadTestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
