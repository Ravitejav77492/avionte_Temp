import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ResourceService } from 'src/app/services/resourceService/resource.service';

@Component({
  selector: 'app-change-password-instruction',
  templateUrl: './change-password-instruction.component.html',
  styleUrls: ['./change-password-instruction.component.css']
})
export class ChangePasswordInstructionComponent implements OnInit {

  passwordForm: FormGroup;

  uiConfigHtmlValue: {
    changePswdLabel: string,
    guideLine: string,
    guideLinestart: string,
    guideline1: string,
    guideline2: string,
    guideline3: string,
    guideline4: string,
    guideline5: string,
    guideline6: string,
    guidelines7: string,
    curntPswd: string,
    nwPswd: string,
    reEntPswd: string,
    cancelBtn: string,
    submitBtn: string
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<ChangePasswordInstructionComponent>,
    private resourceServ: ResourceService) { }

  ngOnInit(): void {
    this.initForm();
    this.initUiConfig();
  }

  initForm() {
    this.passwordForm = this.fb.group({
      currentPwd: ['', Validators.required],
      newPwd: ['', Validators.required],
      reEntPwd: ['', Validators.required]
    });
  }

  initUiConfig() {
    this.uiConfigHtmlValue = {
      changePswdLabel: this.resourceServ.getConstValue('changePassword.label'),
      guideLine: this.resourceServ.getConstValue('changePassword.guidelines'),
      guideLinestart: this.resourceServ.getConstValue('changePassword.guideStart'),
      guideline1: this.resourceServ.getConstValue('changePassword.guideline1'),
      guideline2: this.resourceServ.getConstValue('changePassword.guideline2'),
      guideline3: this.resourceServ.getConstValue('changePassword.guideline3'),
      guideline4: this.resourceServ.getConstValue('changePassword.guideline4'),
      ...this.initUIConfig2()
    }
  }

  initUIConfig2() {
    return  {
      guideline5: this.resourceServ.getConstValue('changePassword.guideline5'),
      guideline6: this.resourceServ.getConstValue('changePassword.guideline6'),
      guidelines7: this.resourceServ.getConstValue('changePassword.guidelines7'),
      curntPswd: this.resourceServ.getConstValue('changePassword.curntPswd'),
      nwPswd: this.resourceServ.getConstValue('changePassword.nwPswd'),
      reEntPswd: this.resourceServ.getConstValue('changePassword.reEntPswd'),
      cancelBtn: this.resourceServ.getConstValue('changePassword.cancelBtn'),
      submitBtn: this.resourceServ.getConstValue('changePassword.submitBtn')
    }
  }

  cancelPassword() {
    this.dialog.close();
  }

  submitPassword() {
    console.log(this.passwordForm.value);
    this.passwordForm.reset();
    this.dialog.close();
  }
}
