import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const navItems = require('../shared/navItems.json');
import { ResourceService } from '../services/resourceService/resource.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navItems: any = navItems;
  subNavItems: any = navItems[0].subMenusList;
  userClicked = 'CHANGE Card'
  resourceConstants: { navUserName: string; };

  constructor(
    public resourceService: ResourceService,
    private router: Router

  ) { }

  ngOnInit() {
    this.initResource();
  }

  onClickMainMenuOpt(data): any {
    this.subNavItems = [];
    this.subNavItems = data.subMenusList;
  }
  private initResource(): any {
    this.resourceConstants = {
      navUserName: this.resourceService.getConstValue('nav.userName'),
    }
  }
  onSelectSubNavItem(navItem): any {
    this.router.navigateByUrl(`ChangeCard/${navItem}`);
  }


}
