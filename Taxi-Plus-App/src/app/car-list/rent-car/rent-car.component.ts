import { formatDate } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, Input, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Notification } from 'src/app/user-notifications/notification.model';
import { NotificationService } from 'src/app/user-notifications/notification.service';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';
import { couldStartTrivia, createBigIntLiteral } from 'typescript';
import { CarManufacturerService } from '../car-manufacturer.service';
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
  message: string;
  carAvailable: boolean = true;

  Car: Car;
  carRents: RentedCar[];
  approvedRents: RentedCar[] = [];

  carRentsTable: { rf: Date, rt: Date, }[];
  color: string;
  carManufacturer: string;
  carType: string;
  fuelType: string;

  canSendRent = true;

  user: User;
  userId = localStorage.getItem("userId");

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router, calendar: NgbCalendar,
    private userService: UserService, private rentService: RentService, private multiService: CarManufacturerService, private toastrService: ToastrService, private notificationService: NotificationService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.carService.getCarById(+param['id']).subscribe(carFromApi => {
          this.Car = carFromApi;
          this.checkCarAvailability(this.Car.id);
          this.loadAdditionalCarData(this.Car);
        });
      }
    );
    if (this.userId !== null)
      this.userService.getUserById(Number(this.userId)).subscribe(userFromApi => this.user = userFromApi);

  }

  checkCarAvailability(id: number) {
    this.rentService.getRentForSingleCar(id).subscribe(rentListFromApi => {
      this.carRents = rentListFromApi;
      rentListFromApi.forEach(element => {
        if (element.rentApproved) {
          this.approvedRents.push(element);
        }
      });
      this.carRents.forEach(element => {
        if (Date.now() >= new Date(element.rentedFrom).getTime() && Date.now() <= new Date(element.rentedTo).getTime()) {
          this.carAvailable = false;
        }
      });
    });
  }

  refreshRentList() {
    this.rentService.getRentForSingleCar(this.Car.id).subscribe(rentListFromApi => {
      this.carRents = rentListFromApi;
  
    });
  }

  loadApprovedRents() {

  }

  loadAdditionalCarData(car: Car) {
    this.multiService.getColorById(car.colorId).subscribe(data => {
      this.color = data.colorName;
    });
    this.multiService.getFuelTypeById(car.fuelTypeId).subscribe(data => {
      this.fuelType = data.fuelTypeName;
    });
    this.multiService.getCarTypeById(car.carTypeId).subscribe(data => {
      this.carType = data.typeName;
    });
    this.multiService.getCarManufacturerById(car.carManufacturerId).subscribe(data => {
      this.carManufacturer = data.manufacturerName;
    });
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

    if (this.toDate != null) {
      if (this.toDate.month - this.fromDate.month == 1) {
        this.toDateTransformed = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
        this.fromDateTransformed = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
        daysToAdd = 0;
      }
      else {
        this.toDateTransformed = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
        this.fromDateTransformed = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
      }
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
      userId: Number(this.userId),
      carId: this.Car.id
    };

    if (new Date().getTime() > this.fromDateTransformed.getTime()) {
      this.toastrService.warning('Molimo da unesete ispravan datum!', 'Željeni datum je prošao!');
      return;
    }


    var isRequestPossible = this.validateRentRequest(rentRequest);
    if (isRequestPossible) {
      this.rentService.addBookedCar(rentRequest).subscribe(data => this.refreshRentList());

      this.message = "Uspješno ste poslali zahtjev za iznajmljivanje";
      var rf = formatDate(rentRequest.rentedFrom, 'dd-MM-yyyy', 'en_US');
      var rt = formatDate(rentRequest.rentedTo, 'dd-MM-yyyy', 'en_US');
      var notification: Notification = {
        title: "Zahtjev za iznajmljivanje vozila!",
        text: "Uspješno ste poslali zahtjev za iznajmljivanje vozila " + this.Car.carName + " u periodu od: " + rf + " do: " + rt,
        userId: Number(localStorage.getItem('userId')),
        viewed: false
      };
      this.notificationService.addNotification(notification).subscribe();
      this.canSendRent = false;

      setTimeout(() => { this.message = "" }, 3000);
      setTimeout(() => {
        this.canSendRent = true;
      }, 5000);

    }
    else {
      this.toastrService.error('Automobil je u željenom vremenskom periodu zauzet!', 'Automobil zauzet!');
    }
  }

  validateRentRequest(rentRequest: RentedCar): boolean {
    var rentValid = true;
    this.carRents.forEach(element => {
      var rt = formatDate(element.rentedTo, 'yyyy-MM-dd', 'en_US');
      var rf = formatDate(rentRequest.rentedFrom, 'yyyy-MM-dd', 'en_US');
      if (!element.requestCanceled) {
        if (new Date(rentRequest.rentedFrom).getTime() <= new Date(element.rentedFrom).getTime() 
        && new Date(rentRequest.rentedTo).getTime() >= new Date(element.rentedTo).getTime()) {
          rentValid = false;
        }
        if (new Date(rentRequest.rentedFrom).getTime() <= new Date(element.rentedFrom).getTime() 
        && (new Date(rentRequest.rentedTo).getTime() <= new Date(element.rentedTo).getTime() 
        && new Date(rentRequest.rentedTo).getTime() >= new Date(element.rentedFrom).getTime())) {
          rentValid = false;
        }
        if (new Date(rentRequest.rentedFrom).getTime() >= new Date(element.rentedFrom).getTime() 
        && new Date(rentRequest.rentedTo).getTime() <= new Date(element.rentedTo).getTime()) {
          rentValid = false;
        }
        if (new Date(rentRequest.rentedFrom).getTime() <= new Date(element.rentedFrom).getTime() 
        && new Date(rentRequest.rentedTo).getDate() == new Date(element.rentedFrom).getDate()) {
          rentValid = false;
        }
        if (rt === rf) {
          rentValid = false;
        }

      }
    });
    return rentValid;
  }
}
