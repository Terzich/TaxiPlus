import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'account', component: AuthComponent, children:
      [
        { path: '', redirectTo: '/account/login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'registration', component: RegistrationComponent }
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {

}