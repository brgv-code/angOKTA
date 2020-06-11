import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OktaAuthGuard, 
         OktaCallbackComponent,
         OktaLoginRedirectComponent } from '@okta/okta-angular';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ OktaAuthGuard ]
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: OktaLoginRedirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
