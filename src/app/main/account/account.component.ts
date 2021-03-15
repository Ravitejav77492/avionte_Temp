import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResourceService } from 'src/app/services/resourceService/resource.service';
import { ChangePasswordInstructionComponent } from 'src/app/shared/change-password-instruction/change-password-instruction.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  isDisplayText = false;
  isDisplay = false;
  isShow = false;
  isShowEmail = false;
  userForm: FormGroup
  salutation01: any[] = [{value: 'Mr.'}, {value:'Mrs'}];
  salutation02: any[] = [{value: 'Mr.'}, {value:'Mrs'}];
  states: any[] = [{value: 'Karnataka'}, {value: 'Andhra'}];
  userFormUIConfig: {
    header: string,
    changePassword: string,
    salutationLabel: string,
    fName: string,
    mName: string,
    lName: string,
    suffix: string,
    ssnNum: string,
    middleInit: string,
    addr1: string,
    addr2: string,
    city: string,
    state: string,
    zip: string,
    mobPhone: string,
    textAlert: string,
    sndVerfText: string,
    verify: string,
    resndVerif: string,
    homePhn: string,
    email: string,
    emailAlert: string,
    sndVerfEmail: string,
    cancelBtn: string,
    saveBtn: string,
    nickName:string
  };

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private resourceServ: ResourceService
    ) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllHtmlConstant();
  }

  getAllHtmlConstant() {
    this.userFormUIConfig = {
      header: this.resourceServ.getConstValue('userProfile.header'),
      changePassword: this.resourceServ.getConstValue('userProfile.ChangePassword'),
      salutationLabel: this.resourceServ.getConstValue('userProfile.salutation'),
      fName: this.resourceServ.getConstValue('userProfile.fName'),
      mName: this.resourceServ.getConstValue('userProfile.mName'),
      ...this.getAllHtmlConstant2(),
      ...this.getAllHtmlConstant3(),
      ...this.getAllHtmlConstant4()
    };
  }

  getAllHtmlConstant2() {
    return {
      lName: this.resourceServ.getConstValue('userProfile.lName'),
      suffix: this.resourceServ.getConstValue('userProfile.suffix'),
      ssnNum: this.resourceServ.getConstValue('userProfile.ssnNum'),
      middleInit: this.resourceServ.getConstValue('userProfile.birthDay'),
      addr1: this.resourceServ.getConstValue('userProfile.addr1'),
      addr2: this.resourceServ.getConstValue('userProfile.addr2'),
      city: this.resourceServ.getConstValue('userProfile.city'),
    }
  }

  getAllHtmlConstant3() {
    return {
      state: this.resourceServ.getConstValue('userProfile.state'),
      zip: this.resourceServ.getConstValue('userProfile.zip'),
      mobPhone: this.resourceServ.getConstValue('userProfile.mNum'),
      textAlert: this.resourceServ.getConstValue('userProfile.txtAlrt'),
      sndVerfText: this.resourceServ.getConstValue('userProfile.sndVrfTxt'),
      verify: this.resourceServ.getConstValue('userProfile.verify'),
      resndVerif: this.resourceServ.getConstValue('userProfile.resndVerif'),
    }
  }

  getAllHtmlConstant4() {
    return {
      homePhn: this.resourceServ.getConstValue('userProfile.hmPhn'),
      email: this.resourceServ.getConstValue('userProfile.email'),
      emailAlert: this.resourceServ.getConstValue('userProfile.allwEmlArt'),
      sndVerfEmail: this.resourceServ.getConstValue('userProfile.sndVerfEml'),
      cancelBtn: this.resourceServ.getConstValue('userProfile.cancelBtn'),
      saveBtn: this.resourceServ.getConstValue('userProfile.saveBtn'),
      nickName: this.resourceServ.getConstValue('userProfile.nickName.label'),
    }
  }

  toggleButtons(event) {
    if (event.target.checked) {
      this.isDisplayText = true;
    } else {
      this.isShow = false;
      this.isDisplayText = false;
    }
  }

  toggleButton(event) {
    if(event.target.checked) {
      this.isDisplay = true;
    } else {
      this.isShowEmail = false;
      this.isDisplay = false;
    }
  }

  initForm() {
    this.userForm = this.fb.group({
      userSalutation: ['Mr.', Validators.required],
      fName: ['', Validators.required],
      mName: ['', Validators.required],
      lName: ['', Validators.required],
      userSalutation2: ['Mr.', Validators.required],
      ssnNumber: ['', Validators.required],
      midInitDate: ['', Validators.required],
      addr1: ['', Validators.required],
      ...this.initForm2()
    })
  }

  initForm2() {
    return {
      addr2: ['', Validators.required],
      cityName: ['', Validators.required],
      stateName: ['', Validators.required],
      zipCode: ['', Validators.required],
      phnNum: ['', Validators.required],
      checkboxValue1: [''],
      homePhone: ['', Validators.required],
      emailId: ['', Validators.required],
      checkboxValue2: ['']
    }
  }

  saveUserForm() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }

  sendVerificationText() {
    this.isShow = true;
    this.isDisplayText = false;
  }

  sendVerificationEmail() {
    this.isShowEmail = true;
    this.isDisplay = false;
  }

  changePassword() {
    const dialogrefer = this.dialog.open(ChangePasswordInstructionComponent, {
      disableClose: true,
      width: '425px'
    });
  }

  cancelUserForm() {
    this.userForm.reset();
  }

}
