import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotUserNameComponent } from './login/forgot-user-name/forgot-user-name.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CoreModule } from './shared/core.Module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ForgotUserNameComponent,
    ForgotPasswordComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule

  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
