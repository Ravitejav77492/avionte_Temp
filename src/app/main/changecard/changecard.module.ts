import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangecardRoutingModule } from './changecard-routing.module';
import { AccountComponent } from '../account/account.component';


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    ChangecardRoutingModule
  ]
})
export class ChangecardModule { }
