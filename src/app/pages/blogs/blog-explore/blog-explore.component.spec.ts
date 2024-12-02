import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExploreComponent } from './blog-explore.component';

describe('BlogExploreComponent', () => {
  let component: BlogExploreComponent;
  let fixture: ComponentFixture<BlogExploreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogExploreComponent]
    });
    fixture = TestBed.createComponent(BlogExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
