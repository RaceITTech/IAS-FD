import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLinkComponent } from './agent-link.component';

describe('AgentLinkComponent', () => {
  let component: AgentLinkComponent;
  let fixture: ComponentFixture<AgentLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentLinkComponent]
    });
    fixture = TestBed.createComponent(AgentLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
