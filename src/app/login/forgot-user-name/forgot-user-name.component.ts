import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from 'src/app/services/resourceService/resource.service';

@Component({
  selector: 'app-forgot-user-name',
  templateUrl: './forgot-user-name.component.html',
  styleUrls: ['./forgot-user-name.component.css']
})
export class ForgotUserNameComponent implements OnInit {
  resourceConstants: { primaryContent: string; secondaryContent: string; email: string; getUsernameBtn: string; cancelBtn: string; };

  constructor(
    public resourceSrv: ResourceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.initResource();
  }

  initResource(): any {
    this.resourceConstants = {
      primaryContent: this.resourceSrv.getConstValue('forgotUsername.content1'),
      secondaryContent: this.resourceSrv.getConstValue('forgotUsername.content2'),
      email: this.resourceSrv.getConstValue('forgotUsername.label.email'),
      getUsernameBtn: this.resourceSrv.getConstValue('forgotUsername.btn.getUsername'),
      cancelBtn: this.resourceSrv.getConstValue('forgotUsername.btn.Cancel')
    }
  }

  onClickCancel(): any {
    this.router.navigateByUrl('login');
  }

}
