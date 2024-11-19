import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingNavComponent } from './marketing-nav.component';

describe('MarketingNavComponent', () => {
  let component: MarketingNavComponent;
  let fixture: ComponentFixture<MarketingNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingNavComponent]
    });
    fixture = TestBed.createComponent(MarketingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
