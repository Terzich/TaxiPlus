import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, Input, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';
import { Car } from '../car.model';
import { CarService } from '../car.service';
import { RentService } from './rent.service';
import { RentedCar } from './rented-car.model';


@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  fromDateTransformed: Date;
  toDateTransformed: Date;
  numberOfDays: number;
  totalPrice: number;

  Car: Car;
  user: User;
  carRents: RentedCar[];

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  message: string;
  carAvailable: boolean = true;

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router, calendar: NgbCalendar,
    private userService: UserService, private rentService: RentService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.carService.getCarById(+param['id']).subscribe(carFromApi => {
          this.Car = carFromApi;
        this.checkCarAvailability(this.Car.id);
        });
      }
    );
    this.userService.getUserById(1).subscribe(userFromApi => this.user = userFromApi);

    
  }

  checkCarAvailability(id: number) {
    this.rentService.getRentForSingleCar(id).subscribe(rentListFromApi => {
      this.carRents = rentListFromApi
      this.carRents.forEach(element => {
        var rentedFrom_element = new Date(element.rentedFrom).getTime();
        var rentedTo_element = new Date(element.rentedTo).getTime();
        if (Date.now() >= rentedFrom_element && Date.now() <= rentedTo_element) {
          this.carAvailable = false;
        }
      });
    });
  }

  calculatePrice(): void {
    const diffInMs = Math.abs(this.bsRangeValue[1].valueOf() - this.bsRangeValue[0].valueOf());
    var r = diffInMs / (1000 * 60 * 60 * 24);
    this.totalPrice = this.Car.pricePerDay * r;
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  generateDatePeriod() {
    var daysToAdd = 1;
    this.fromDateTransformed = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day);
    console.log(this.fromDate.month);

    if (this.toDate != null) {
      this.toDateTransformed = new Date(this.toDate.year, this.toDate.month, this.toDate.day);
    console.log(this.toDate.month);
      if (this.toDate.month - this.fromDate.month == 1)
        daysToAdd = 2;

    }

    var Time = this.toDateTransformed.getTime() - this.fromDateTransformed.getTime();
    this.numberOfDays = Time / (1000 * 3600 * 24) + daysToAdd;
    this.totalPrice = 50 * this.numberOfDays;
  }

  sendRentRequest() {
    let rentRequest: RentedCar = {
      rentedFrom: this.fromDateTransformed,
      rentedTo: this.toDateTransformed,
      totalPrice: this.totalPrice,
      rentApproved: false,
      requestCanceled: false,
      userId: 2,
      carId: this.Car.id
    };

    this.rentService.addBookedCar(rentRequest).subscribe();
    this.message = "Uspješno ste poslali zahtjev za iznajmljivanje";

    setTimeout(() => { this.message = "" }, 3000);

  }
}
