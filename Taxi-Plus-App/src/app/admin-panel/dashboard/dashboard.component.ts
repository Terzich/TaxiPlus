import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/car-list/car.service';
import { RentService } from 'src/app/car-list/rent-car/rent.service';
import { FaqService } from 'src/app/faq/faq.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  numberOfUsers: number;
  numberOfCars: number;
  numberOfRents: number;
  unansweredQuestions: number;


  constructor(private router: Router, private userService: UserService, private rentService: RentService, private carService: CarService, private questionService: FaqService) { }

  ngOnInit(): void {
    this.userService.getUsersFromServer().subscribe(data => {
      this.numberOfUsers = data.length;
    });
    this.rentService.getAllRequestsFromServerWithFilter("unknown").subscribe(data => {
      this.numberOfRents = data.length;
    });
    this.carService.getCarsFromServer().subscribe(data => {
      this.numberOfCars = data.length;
    });
    this.questionService.getAllQuestionsFromServerWithFilter("unanswered").subscribe(data => {
      this.unansweredQuestions = data.length;
    });
  }

}
