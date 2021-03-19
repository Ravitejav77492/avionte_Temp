import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollAgreementComponent } from './enroll/enroll-agreement/enroll-agreement.component';
import { EnrollComponent } from './enroll/enroll.component';
import { EnterCardDetailsComponent } from './enroll/enter-card-details/enter-card-details.component';
import { EnterCardHolderDetailsComponent } from './enroll/enter-card-holder-details/enter-card-holder-details.component';
import { SecurityQuestionsComponent } from './enroll/security-questions/security-questions.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'activateCard' },
  {
    path: 'activateCard', component: EnrollComponent,
    children: [
      { path: 'enterCardDetails', component: EnterCardDetailsComponent },
      { path: 'enterDetails', component: EnterCardHolderDetailsComponent },
      { path: 'enterSecurityDetails', component: SecurityQuestionsComponent },
      { path: 'agreement', component: EnrollAgreementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollRoutingModule { }
