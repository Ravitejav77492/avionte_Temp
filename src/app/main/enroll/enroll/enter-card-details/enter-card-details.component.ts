import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-card-details',
  templateUrl: './enter-card-details.component.html',
  styleUrls: ['./enter-card-details.component.css']
})
export class EnterCardDetailsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitAndNext(): any {
    this.router.navigateByUrl('enroll/activateCard/enterDetails')
  }
}
