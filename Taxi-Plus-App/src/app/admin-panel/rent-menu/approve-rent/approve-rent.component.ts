import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CarManufacturerService } from 'src/app/car-list/car-manufacturer.service';
import { Car } from 'src/app/car-list/car.model';
import { CarService } from 'src/app/car-list/car.service';
import { RentService } from 'src/app/car-list/rent-car/rent.service';
import { RentedCar } from 'src/app/car-list/rent-car/rented-car.model';
import { Notification } from 'src/app/user-notifications/notification.model';
import { NotificationService } from 'src/app/user-notifications/notification.service';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-approve-rent',
  templateUrl: './approve-rent.component.html',
  styleUrls: ['./approve-rent.component.css']
})
export class ApproveRentComponent implements OnInit {

  @Input() rentRequest: RentedCar
  @Output() statusChanged = new EventEmitter<void>();
  numberOfDays: number;

  Car: Car;
  color: string;
  carManufacturer: string;
  carType: string;
  fuelType: string;

  user: User;

  filterType = "";
  requestsFiltered = false;

  constructor(private carService: CarService, private userService: UserService, private multiService: CarManufacturerService,
    private rentService: RentService, private toastr: ToastrService, private notificationService: NotificationService) {}

  ngOnInit(): void {
        this.carService.getCarById(this.rentRequest.carId).subscribe(carFromApi => {
          this.Car = carFromApi;
          this.loadAdditionalCarData(this.Car);
        });
    
      this.userService.getUserById(Number(this.rentRequest.userId)).subscribe(userFromApi => this.user = userFromApi);
      var Time = new Date(this.rentRequest.rentedTo).getTime() - new Date(this.rentRequest.rentedFrom).getTime();
      this.numberOfDays = Time / (1000 * 3600 * 24)+1;

  }

  loadAdditionalCarData(car: Car) {
    this.multiService.getColorById(car.colorId).subscribe(data=> {
      this.color = data.colorName;
    });
    this.multiService.getFuelTypeById(car.fuelTypeId).subscribe(data=> {
      this.fuelType = data.fuelTypeName;
    });
    this.multiService.getCarTypeById(car.carTypeId).subscribe(data=> {
      this.carType = data.typeName;
    });
    this.multiService.getCarManufacturerById(car.carManufacturerId).subscribe(data=> {
      this.carManufacturer = data.manufacturerName;
    });
  }

  approveRentRequest() {
    var req = {
      rentedFrom: this.rentRequest.rentedFrom,
      rentedTo: this.rentRequest.rentedTo,
      requestCanceled: this.rentRequest.requestCanceled,
      totalPrice: this.rentRequest.totalPrice,
      carId: this.rentRequest.carId,
      userId: this.rentRequest.userId,
      rentApproved: true,
    }

    this.rentService.updateBookedCar(req, Number(this.rentRequest.id)).subscribe(()=> this.statusChanged.emit());
    var rt = formatDate(this.rentRequest.rentedFrom,'dd-MM-yyyy','en_US');
    var rf = formatDate(this.rentRequest.rentedTo,'dd-MM-yyyy','en_US');
    var notification : Notification = {
      title: "Odobren zahtjev za iznajmljivanje vozila!",
      text: "Poštovani, vaš zahtjev za iznajmljivanje vozila " + this.Car.carName + " u periodu od: " + rt + "do: " + rf + " je odobren. Automobil možete preuzeti u našoj poslovnici od datuma početka iznajmljivanja vozila.",
      userId: Number(this.rentRequest.userId),
      viewed: false
    };
    this.notificationService.addNotification(notification).subscribe();
    this.toastr.success('Uspješno ste odobrili zahtjev za iznajmljivanje vozila korisniku "' + this.user.firstName + ' ' + this.user.lastName +'".', 'Zahtjev odobren!');
  }

  declineRentRequest() {
    var req = {
      rentedFrom: this.rentRequest.rentedFrom,
      rentedTo: this.rentRequest.rentedTo,
      requestCanceled: true,
      totalPrice: this.rentRequest.totalPrice,
      carId: this.rentRequest.carId,
      userId: this.rentRequest.userId,
      rentApproved: this.rentRequest.rentApproved,
    }

    var rt = formatDate(this.rentRequest.rentedFrom,'dd-MM-yyyy','en_US');
    var rf = formatDate(this.rentRequest.rentedTo,'dd-MM-yyyy','en_US');
    var notification : Notification = {
      title: "Odbijen zahtjev za iznajmljivanje vozila!",
      text: "Poštovani, vaš zahtjev za iznajmljivanje vozila " + this.Car.carName + " u periodu od: " + rt + "do: " + rf + " je odbijen. Ukoliko imate bilo kakvih nejasnoća možete nas kontaktirati putem forme za postavljanje pitanja ili na broj telefona 061/326-520.",
      userId: Number(this.rentRequest.userId),
      viewed: false
    };
    this.notificationService.addNotification(notification).subscribe();

    this.rentService.updateBookedCar(req, Number(this.rentRequest.id)).subscribe(()=> this.statusChanged.emit());
    this.toastr.error('Uspješno ste odbili zahtjev za iznajmljivanje vozila korisniku "' + this.user.firstName + ' ' + this.user.lastName +'".', 'Zahtjev odbijen!');
  }
}
