import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from './notification.model';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.css']
})
export class UserNotificationsComponent implements OnInit {

  allNotifications: any = [];
  numberOfNewNotifications: any = 0;

  userId = Number(localStorage.getItem("userId"));

  constructor(private service: NotificationService) { }

  ngOnInit(): void {
    this.service.getAllNotificationsForUser(this.userId).subscribe(data => {
      this.allNotifications = data;
      this.allNotifications.reverse()
      data.forEach(element => {
        if (!element.viewed)
          this.numberOfNewNotifications++;
      });
      
    });
  }

  viewNotification(notification: Notification) {
    if(!notification.viewed){
      var req = {
        title: notification.title,
        text: notification.text,
        userId: notification.userId,
        viewed: true
      }
      this.service.updateNotification(req, Number(notification.id)).subscribe();
      window.location.reload();
    }
  }

}
