import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enroll-header',
  templateUrl: './enroll-header.component.html',
  styleUrls: ['./enroll-header.component.css']
})
export class EnrollHeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  imgSrc = "../../../../../assets//logo/logoForLoginScreens5.png";
  constructor() { }

  ngOnInit(): void {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();

  }
}
