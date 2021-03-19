import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enroll-side-nav',
  templateUrl: './enroll-side-nav.component.html',
  styleUrls: ['./enroll-side-nav.component.css']
})
export class EnrollSideNavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
