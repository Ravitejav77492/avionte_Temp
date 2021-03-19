import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollRoutingModule } from './enroll-routing.module';
import { EnrollComponent } from './enroll/enroll.component';
import { EnrollHeaderComponent } from './enroll/enroll-header/enroll-header.component';
import { EnrollSideNavComponent } from './enroll/enroll-side-nav/enroll-side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { EnterCardDetailsComponent } from './enroll/enter-card-details/enter-card-details.component';
import { EnterCardHolderDetailsComponent } from './enroll/enter-card-holder-details/enter-card-holder-details.component';
import { SecurityQuestionsComponent } from './enroll/security-questions/security-questions.component';
import { EnrollAgreementComponent } from './enroll/enroll-agreement/enroll-agreement.component';

@NgModule({
  declarations: [EnrollComponent, EnrollHeaderComponent, EnrollSideNavComponent, EnterCardDetailsComponent, EnterCardHolderDetailsComponent, SecurityQuestionsComponent, EnrollAgreementComponent],
  imports: [
    CommonModule,
    EnrollRoutingModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, FlexLayoutModule, MatListModule
  ]
})
export class EnrollModule { }
