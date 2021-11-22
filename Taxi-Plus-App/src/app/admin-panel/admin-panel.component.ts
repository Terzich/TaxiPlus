import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
    if (this.service.getUserRoleId()) {
      this.router.navigate([
        '/not-found'
      ])
    }
  }
  LogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('roleId');

    this.router.navigate([''])
  }

}
