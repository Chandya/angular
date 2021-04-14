import { Injectable } from '@angular/core';

import { AccessRightEnum } from '../enums/access-right-enum.enum';
import { Client } from '../models/client';
import { Asset } from '../models/asset';
import { RiskScenario } from '../models/risk-scenario';
import { Vulnerability } from '../models/vulnerability';
import { Threat } from '../models/threat';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() {}

  getIsLogin(): boolean {
    if (sessionStorage.isLogin == 'true') {
      return true;
    } else {
      return false;
    }
  }

  setIsLogin(isLogin: boolean): void {
    sessionStorage.isLogin = isLogin;
  }

  getCurrentClient(): Client {
    return JSON.parse(sessionStorage.currentClient);
  }

  setCurrentClient(currentClient: Client | null): void {
    sessionStorage.currentClient = JSON.stringify(currentClient);
  }

  getAssets(): Asset[] | null
	{		
		try
		{
			return JSON.parse(sessionStorage.assets);
		}
		catch
		{
			return null;
		}
	}



	setAssets(assets: Asset[]): void
	{
		sessionStorage.assets = JSON.stringify(assets);
  }
  
  getRiskScenarios(): RiskScenario[] | null
	{		
		try
		{
			return JSON.parse(sessionStorage.riskScenarios);
		}
		catch
		{
			return null;
		}
	}

	setRiskScenarios(riskScenarios: RiskScenario[]): void
	{
		sessionStorage.products = JSON.stringify(riskScenarios);
  }
  
  getThreats(): Threat[] | null
	{		
		try
		{
			return JSON.parse(sessionStorage.threats);
		}
		catch
		{
			return null;
		}
	}



	setThreats(threats: Threat[]): void
	{
		sessionStorage.products = JSON.stringify(threats);
  }
  
  getVulnerabilities(): Vulnerability[] | null
	{		
		try
		{
			return JSON.parse(sessionStorage.vulnerabilities);
		}
		catch
		{
			return null;
		}
	}



	setVulnerabilities(vulnerabilities: Vulnerability[]): void
	{
		sessionStorage.products = JSON.stringify(vulnerabilities);
	}
	

  checkAccessRight(path: string): boolean {
    console.log('********** path: ' + path);
    if (this.getIsLogin()) {
      let client: Client = this.getCurrentClient();

      if (client.accessRightEnum == AccessRightEnum.STANDARD) {
        if (
          path == '/library' ||
          path == '/library' ||
          path == '/library' ||
          path == '/library' ||
          path == '/library'
        ) {
          return true;
        } else {
          return false;
        }
      } else if (client.accessRightEnum == AccessRightEnum.PREMIUM) {
        if (
          path == '/library' ||
          path == '/library' ||
          path == '/library' ||
          path == '/library' ||
          path == '/library'
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    return false;
  }
}
