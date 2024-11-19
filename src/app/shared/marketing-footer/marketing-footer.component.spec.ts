import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFooterComponent } from './marketing-footer.component';

describe('MarketingFooterComponent', () => {
  let component: MarketingFooterComponent;
  let fixture: ComponentFixture<MarketingFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingFooterComponent]
    });
    fixture = TestBed.createComponent(MarketingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
