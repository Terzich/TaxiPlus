import { LowerCasePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/auth/auth.service'
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  error : string;
  constructor(private authService: AuthService, private router : Router, private userService: UserService) { }
  @ViewChild('loginForm') public loginForm: NgForm;
  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/adminpanel']);
    }
  }
  onSubmit() {
    if (!this.loginForm.valid)
        return;
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.isLoading = true;
    localStorage.setItem('token', window.btoa(username + ':' + password));
    this.authService.login(username).subscribe(s=> {
      this.router.navigate(['/adminpanel']);
      this.isLoading = false;

    }, 
    error => {

      this.error = "Korisničko ime ili lozinka su neispravni. "
        
      this.isLoading = false
    });
  }
}