import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { MenubarModule } from 'primeng/menubar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AssetLibraryComponent } from './library/asset-library/asset-library.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAssetComponent } from './library/create-asset/create-asset.component';
import { DeleteAssetComponent } from './library/delete-asset/delete-asset.component';
import { UpdateAssetComponent } from './library/update-asset/update-asset.component';
import { RiskAssessmentComponent } from './functions/risk-assessment/risk-assessment.component';
import { ViewAllReportsComponent } from './functions/view-all-reports/view-all-reports.component';
import { RiskAssessmentVulnerabilityComponent } from './functions/risk-assessment-vulnerability/risk-assessment-vulnerability.component';
import { RiskAssessmentControlComponent } from './functions/risk-assessment-control/risk-assessment-control.component';
import { ViewAllTicketsComponent } from './help/view-all-tickets/view-all-tickets.component';
import { CreateTicketComponent } from './help/create-ticket/create-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    SidebarComponent,
    AssetLibraryComponent,
    MainMenuComponent,
    FooterComponent,
    CreateAssetComponent,
    DeleteAssetComponent,
    UpdateAssetComponent,
    RiskAssessmentComponent,
    ViewAllReportsComponent,
    RiskAssessmentVulnerabilityComponent,
    RiskAssessmentControlComponent,
    ViewAllTicketsComponent,
    CreateTicketComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
