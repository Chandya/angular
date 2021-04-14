import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { RiskScenario } from '../../models/risk-scenario';
import { RiskScenarioService } from '../../services/risk-scenario.service';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.css']
})
export class RiskAssessmentComponent implements OnInit {

  riskScenarios: RiskScenario[] | null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public sessionService: SessionService,
    private riskScenarioService: RiskScenarioService) 
    { 
      this.riskScenarios = new Array();
    }

  ngOnInit(): void {
    this.riskScenarios = this.riskScenarioService.getRiskScenarios();
  }


}
