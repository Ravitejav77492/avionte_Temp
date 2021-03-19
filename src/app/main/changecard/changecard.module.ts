import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangecardRoutingModule } from './changecard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';


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
