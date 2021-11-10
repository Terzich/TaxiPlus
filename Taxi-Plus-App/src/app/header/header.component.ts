import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  isLogged = localStorage.getItem('token') !== null ? false : true ;
  adminLogged = false;
  constructor(private loginService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkToken()
    this.loginService.loginStatusChange().subscribe(loggedIn => {
        this.checkToken()   
  });
  }
  checkToken(){
      this.isLogged = localStorage.getItem('token') !== null ? false : true ;
  }
  logOut(){
    localStorage.removeItem('token');
    if(localStorage.getItem('roleId') === '1'){
        localStorage.removeItem('roleId');
        window.location.reload();
    }
        localStorage.removeItem('roleId');
        this.ngOnInit()

/// malo ovo bolje optimizuj, ovo sam samo da radi
//https://www.npmjs.com/package/ngx-toastr kad se odjavi dodaj neku poruku da je uspjesno odjavljen
    
  }
}
