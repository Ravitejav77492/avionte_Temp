import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangecardRoutingModule } from './changecard-routing.module';
import { AccountComponent } from '../account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    ChangecardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChangecardModule { }
