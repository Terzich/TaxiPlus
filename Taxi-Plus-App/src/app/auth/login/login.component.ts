import { LowerCasePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthService} from 'src/app/auth/auth.service'
import { UserService } from 'src/app/user.service';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  error : string;
  routeRedirection: string;
  constructor(private authService: AuthService, private router : Router, private userService: UserService, private loginService: LoginService) {
      loginService.redirectWhereCalled.subscribe(eventData => this.routeRedirection = eventData);
   }
  @ViewChild('loginForm') public loginForm: NgForm;
  ngOnInit(): void {
    console.log(this.routeRedirection)
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/adminpanel']);
    }
  }
  onSubmit() {
    if (!this.loginForm.valid)
        return;
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    const admin = 1;
    const user = 2
    this.isLoading = true;
    localStorage.setItem('token', window.btoa(username + ':' + password));
    this.authService.login(username).subscribe(s=> {
      localStorage.setItem('roleId', String(s[0].roleId))
      localStorage.setItem('userId', String(s[0].id))
      if(s[0].roleId ==admin){
        this.router.navigate(['/adminpanel']);
      }
      else if(s[0].roleId == user){
        this.router.navigate([''])
      }

      this.isLoading = false;
    }, 
    error => {
      this.error = "Korisničko ime ili lozinka su neispravni. "
      this.isLoading = false
    });
  }
}