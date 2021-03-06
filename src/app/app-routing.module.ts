import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ForgotUserNameComponent } from './login/forgot-user-name/forgot-user-name.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { CanActivateAuthGuardService } from './services/routeGuards/can-activate-auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'forgotUsername', component: ForgotUserNameComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  {
    path: 'ChangeCard',
    loadChildren: () => import('./main/changecard/changecard.module').then(m => m.ChangecardModule),
    canActivate: [CanActivateAuthGuardService]
  },
  {
    path: 'enroll',
    loadChildren: () => import('./main/enroll/enroll.module').then(m => m.EnrollModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
