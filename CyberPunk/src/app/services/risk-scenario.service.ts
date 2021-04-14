import { Injectable } from '@angular/core';
import { RiskScenario } from '../models/risk-scenario';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class RiskScenarioService 
{
  riskScenarios: RiskScenario[] | null;


  constructor(private sessionService: SessionService) 
  { 
    this.riskScenarios = this.sessionService.getRiskScenarios();

    if(this.riskScenarios == null) 
    {
      this.riskScenarios = new Array();

      let riskScenario: RiskScenario;
      riskScenario = new RiskScenario(1, "3rd party intruders break-into company database by brute-force to crack weak/default passwords to personal details of customer and employees hence resulting in loss of vital data, privacy of users and company reputation.", "Client Database");
      this.riskScenarios.push(riskScenario);
      riskScenario = new RiskScenario(2, "Attacker performs SQL injection on an unpatched legacy website application to download vital records/data.", "Legacy Website Application");
      this.riskScenarios.push(riskScenario);
      riskScenario = new RiskScenario(3, "Attacker delivers phishing email to unsuspecting user which when clicked triggers the user account to perform SMB authentication with malicious server and disclose hashed credentials.", "User Account");
      this.riskScenarios.push(riskScenario);
      riskScenario = new RiskScenario(4, "Attacker installs malware that is specifically designed to take control of internal organizational information systems, identify sensitive information and exfiltrate the information back to attacker and conceal these actions.", "Root Account");
      this.riskScenarios.push(riskScenario);
      riskScenario = new RiskScenario(5, "Attacker installs malware that is specifically designed to take control of internal organizational information systems, identify sensitive information and exfiltrate the information back to attacker and conceal these actions.", "Database");
      this.riskScenarios.push(riskScenario);
      riskScenario = new RiskScenario(6, "Attacker obfuscates data by utilizing a public proxy service via an SSL connection that encrypts the entire session hence allowing attacker to leak sensitive information without being detected by the company's Stateful Packet Inspection firewall.", "Database");
      this.riskScenarios.push(riskScenario);

      this.sessionService.setRiskScenarios(this.riskScenarios);
    }

  }

  getRiskScenarios()
	{				
		return this.riskScenarios;
	}


}
