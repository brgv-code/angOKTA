import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';
 
const oktaConfig = {
  issuer: 'https://dev-811910.okta.com/oauth2/default',
  clientId: '0oadh5vqfFWq8ohN24x6',
  redirectUri: 'http://localhost:4200/implicit/callback',
  pkce: true
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
