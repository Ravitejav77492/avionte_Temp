import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourceService } from '../services/resourceService/resource.service';
import { Utils } from '../shared/Utilities/utils'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  protected myPrivateVar: string = "my";
  resourceConstants: { userNameLabel: string; passwordLabel: string; forgotUserName: string; forgotPassword: string; haveAccount: string; registerHere: string; enrollBtn: string; };
  constructor(
    public route: Router,
    public resourceService: ResourceService
  ) { }

  ngOnInit() {
    this.initForm();
    this.initResource();
  }

  initForm(): any {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmitForm(formValues): any {
    if (formValues.userName === 'admin' && formValues.password === 'admin123') {
      Utils.SET_LOCAL_STORAGE('loggedIn', 'true');
      this.route.navigateByUrl('ChangeCard');
    }
  }

  onClickForgotUserName(): any {
    this.route.navigateByUrl('forgotUsername');
  }
  onClickForgotPassword(): any {
    this.route.navigateByUrl('forgotPassword');
  }

  private initResource(): any {
    this.resourceConstants = {
      userNameLabel: this.resourceService.getConstValue('login.username.label'),
      passwordLabel: this.resourceService.getConstValue('login.password.label'),
      forgotUserName: this.resourceService.getConstValue('login.forget.userName?'),
      forgotPassword: this.resourceService.getConstValue('login.forget.password?'),
      haveAccount: this.resourceService.getConstValue('login.account.donthave'),
      registerHere: this.resourceService.getConstValue('login.registerHere'),
      enrollBtn: this.resourceService.getConstValue('login.enroll.btn')
    }
  }
}

