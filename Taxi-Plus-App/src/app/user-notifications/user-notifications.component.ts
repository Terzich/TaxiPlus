import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.css']
})
export class UserNotificationsComponent implements OnInit {

  allNotifications : any =[];
  numberOfNotifications: any;
  userId = Number(localStorage.getItem("userId"));
  constructor(private service: NotificationService) { }

  ngOnInit(): void {
    this.service.getAllNotificationsForUser(this.userId).subscribe(data => {
      this.allNotifications = data;
      this.numberOfNotifications = data.length;
    });
  }

}
