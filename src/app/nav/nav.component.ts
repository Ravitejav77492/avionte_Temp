import { Component, OnInit } from '@angular/core';
const navItems = require('../shared/navItems.json')
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navItems: any = navItems;
  subNavItems: any = navItems[0].subMenusList;
  userClicked = 'Change'

  constructor(

  ) { }

  ngOnInit() {
    console.log(this.subNavItems);

  }

  private onClickMainMenuOpt(data): any {
    this.subNavItems = [];
    this.subNavItems = data.subMenusList;
  }

}
