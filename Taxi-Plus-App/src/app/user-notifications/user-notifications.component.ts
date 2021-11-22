import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.css']
})
export class UserNotificationsComponent implements OnInit {

  allNotifications: any = [];
  newNotifications: any = [];
  numberOfOldNotifications: any = 0;
  numberOfNewNotifications: any = 0;

  userId = Number(localStorage.getItem("userId"));

  constructor(private service: NotificationService) { }

  ngOnInit(): void {
    this.service.getAllNotificationsForUser(this.userId).subscribe(data => {
      data.forEach(element => {
        console.log(element.viewed)
        if (!element.viewed){
          this.newNotifications.push(element);
          this.numberOfNewNotifications++;
        }
        else{
          this.allNotifications.push(element)
          this.numberOfOldNotifications++;
        }
      });
      
    });
  }

}
