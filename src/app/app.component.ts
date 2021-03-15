import { Component } from '@angular/core';
import { Utils } from './shared/Utilities/utils'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Avionte';
  ngOninit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): boolean {
    if (Utils.GET_LOCAL_STORAGE('loggedIn') === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
