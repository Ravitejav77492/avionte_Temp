import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { log } from 'node:console';
import { from } from 'rxjs';
import { Utils } from '../../shared/Utilities/utils';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAuthGuardService implements CanActivate {

  constructor(
    public router: Router
  ) { }

  canActivate(): boolean {
    if (localStorage.getItem('loggedIn') === 'true') {
      console.log('fsff');
      this.router.navigateByUrl('ChangeCard');
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
