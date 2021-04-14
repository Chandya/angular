import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AssetLibraryComponent } from './library/asset-library/asset-library.component';
import { DeleteAssetComponent } from './library/delete-asset/delete-asset.component';
import { CreateAssetComponent } from './library/create-asset/create-asset.component';
import { UpdateAssetComponent } from './library/update-asset/update-asset.component';
import { RiskAssessmentComponent } from './functions/risk-assessment/risk-assessment.component';
import { ViewAllReportsComponent } from './functions/view-all-reports/view-all-reports.component';
import { RiskAssessmentVulnerabilityComponent } from './functions/risk-assessment-vulnerability/risk-assessment-vulnerability.component';
import { RiskAssessmentControlComponent } from './functions/risk-assessment-control/risk-assessment-control.component';
import { ViewAllTicketsComponent } from './help/view-all-tickets/view-all-tickets.component';
import { CreateTicketComponent } from './help/create-ticket/create-ticket.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'library/assetLibrary', component: AssetLibraryComponent },
  { path: 'library/createAsset', component: CreateAssetComponent },
  { path: 'library/updateAsset', component: UpdateAssetComponent },
  { path: 'library/updateAsset/:assetId', component: UpdateAssetComponent },
  { path: 'library/deleteAsset', component: DeleteAssetComponent },
  { path: 'functions/riskAssessment', component: RiskAssessmentComponent },
  { path: 'functions/viewAllReports', component: ViewAllReportsComponent },
  { path: 'functions/riskAssessmentVulnerability', component: RiskAssessmentVulnerabilityComponent },
  { path: 'functions/riskAssessmentControl', component: RiskAssessmentControlComponent },
  { path: 'help/viewAllTickets', component: ViewAllTicketsComponent },
  { path: 'help/createTicket', component: CreateTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
