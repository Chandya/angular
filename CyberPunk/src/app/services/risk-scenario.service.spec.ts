import { TestBed } from '@angular/core/testing';

import { RiskScenarioService } from './risk-scenario.service';

describe('RiskScenarioService', () => {
  let service: RiskScenarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskScenarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
