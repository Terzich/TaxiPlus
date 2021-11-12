import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  isLogged = localStorage.getItem('token') !== null ? false : true;
  adminLogged = false;
  constructor(private loginService: AuthService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkToken()
    this.loginService.loginStatusChange().subscribe(loggedIn => {
      this.checkToken()
    });
  }
  checkToken() {
    this.isLogged = localStorage.getItem('token') !== null ? false : true;
  }
  logOut() {
    localStorage.removeItem('token');
    if (localStorage.getItem('roleId') === '1') {
      localStorage.removeItem('roleId');
      window.location.reload();
    }
    localStorage.removeItem('roleId');
    localStorage.removeItem('userId');
    this.ngOnInit()

    this.toastr.success('Uspješno ste se odjavili sa aplikacije!', 'Odjava uspješna!');
    this.router.navigate(['']);
  }
}
