import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  isLogged : boolean
  adminLogged = false;
  constructor() { }

  ngOnInit(): void {
    this.checkToken()
    if(localStorage.getItem('roleId') ==='1'){
      this.adminLogged = true;  
    }
  }
  checkToken(){
      this.isLogged = localStorage.getItem('token') !== undefined ? false : true ;
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('roleId');
    window.location.reload();
  }
}
