import { OktaAuthService } from '@okta/okta-angular';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit{
  isAuthenticated: boolean;
   constructor(public oktaAuth: OktaAuthService) {
    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
      // get authentication state for immediate use
       this.isAuthenticated = await this.oktaAuth.isAuthenticated();

  }
  // login() {
  //   this.oktaAuth.loginRedirect('/');
  // }
  logout() {
    this.oktaAuth.logout('/login');
  }
}