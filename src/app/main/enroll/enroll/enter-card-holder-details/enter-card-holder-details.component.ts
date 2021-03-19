import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-card-holder-details',
  templateUrl: './enter-card-holder-details.component.html',
  styleUrls: ['./enter-card-holder-details.component.css']
})
export class EnterCardHolderDetailsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitAndNext(): any {
    this.router.navigateByUrl('enroll/activateCard/enterSecurityDetails');
  }

}
