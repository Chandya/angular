import { Vulnerability } from './vulnerability';
import { Asset } from './asset';
import { Threat } from './threat';

export class RiskScenario 
{
    riskScenarioId: number | undefined;
    riskScenarioName: string | undefined;
    assets: string | undefined;
   

    constructor(riskScenarioId?:number, riskScenarioName?:string, assets?:string) 
    {
        this.riskScenarioId = riskScenarioId;
        this.riskScenarioName = riskScenarioName;
        this.assets = assets;

    }
}
