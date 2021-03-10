import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from 'src/app/services/resourceService/resource.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resourceConstants: { primaryContent: string; usernameLabel: string; continueBtn: string; cancelBtn: string; };

  constructor(
    public resourceSrv: ResourceService,
    public router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initResource();
  }

  initResource(): any {
    this.resourceConstants = {
      primaryContent: this.resourceSrv.getConstValue('forgotPassword.content'),
      usernameLabel: this.resourceSrv.getConstValue('forgotPassword.label.userName'),
      continueBtn: this.resourceSrv.getConstValue('forgotPassword.btn.Continue'),
      cancelBtn: this.resourceSrv.getConstValue('forgotPassword.btn.Cancel'),
    }
  }

  onClickCancel(): any {
    this.router.navigateByUrl('login');
  }

  onClickContinue(): any {
    this.dialog.open(ConfirmDialogComponent, {
      width: "450px", height: "239px", disableClose: true,
      data: {
        title: 'Forgot Password Confirmation',
        message: 'Clicking confirm will reset your password and send an email with a temporary password.',
        buttonForCloseDialog: 'Cancel',
        buttonForconfirmOrSubmit: 'Confirm'
      }
    });
  }

}
