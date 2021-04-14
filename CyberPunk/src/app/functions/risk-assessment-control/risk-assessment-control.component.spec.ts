import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAssessmentControlComponent } from './risk-assessment-control.component';

describe('RiskAssessmentControlComponent', () => {
  let component: RiskAssessmentControlComponent;
  let fixture: ComponentFixture<RiskAssessmentControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskAssessmentControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskAssessmentControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
