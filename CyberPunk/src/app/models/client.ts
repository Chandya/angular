import { AccessRightEnum } from '../enums/access-right-enum.enum';
import { ServiceTicket } from './service-ticket';
import { Asset } from './asset';
import { RiskScenario } from './risk-scenario';
import { Vulnerability } from './vulnerability';
import { Control } from './control';
import { Threat } from './threat';
import { RiskReport } from './risk-report';
import { Workshop } from './workshop';


export class Client {
    clientId: number | undefined;
    companyName: string | undefined;
    workAddress: string | undefined;
    email: string | undefined;
    contactNumber: string | undefined;
    accessRightEnum: AccessRightEnum | undefined;
    CCNumber: string | undefined;
    CVV: number | undefined;
	username: string | undefined;
    password: string | undefined;
    expiryDate: string | undefined;
    remainingWorkshops: number | undefined;
    serviceTickets: ServiceTicket[] | undefined;
    clientAssetLibrary: Asset[] | undefined;
    clientRiskScenarioLibrary: RiskScenario[] | undefined;
    clientVulnerabilityLibrary: Vulnerability[] | undefined;
    clientControlLibrary: Control[] | undefined;
    clientThreatLibrary: Threat[] | undefined;
    clientRiskReport: RiskReport | undefined;
    workshops: Workshop[] | undefined;

	
	
    constructor(clientId?: number, companyName?: string, workAddress?: string, email?: string, accessRightEnum?: AccessRightEnum, CCNumber?: string, CVV?: number, 
        username?: string, password?: string, expiryDate?: string, remainingWorkshops?: number)
	{
		this.clientId = clientId;		
		this.companyName = companyName;
		this.email = email;
		this.accessRightEnum = accessRightEnum;
		this.username = username;
        this.password = password;
        this.serviceTickets = new Array();
        this.clientAssetLibrary = new Array();
        this.clientRiskScenarioLibrary = new Array();
        this.clientVulnerabilityLibrary = new Array();
        this.clientControlLibrary = new Array();
        this.clientThreatLibrary = new Array();
        this.workshops = new Array();
	}

}
