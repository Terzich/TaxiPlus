import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Car } from '../car.model';
import { CarService } from '../car.service';


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

  @Input() Car: Car;

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  message: string;

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router, calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (param: Params) => {
        this.carService.getCarById(+param['id']).subscribe(carFromApi => this.Car = carFromApi);
      }
    );
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
    if (this.toDate != null) {
      this.toDateTransformed = new Date(this.toDate.year, this.toDate.month, this.toDate.day);
      if (this.toDate.month - this.fromDate.month == 1)
        daysToAdd = 2;

    }
    this.numberOfDays = Math.floor((this.toDateTransformed.getTime() - this.fromDateTransformed.getTime()) / 1000 / 60 / 60 / 24);

    var Time = this.toDateTransformed.getTime() - this.fromDateTransformed.getTime();
    this.numberOfDays = Time / (1000 * 3600 * 24) + daysToAdd;
    this.totalPrice = 50 * this.numberOfDays;
  }


  // rentCar(){
  //   let data:BookedCar={
  //     userID:1,
  //     carID:this.Car.id,
  //     from:this.bsRangeValue[0],
  //     to:this.bsRangeValue[1],
  //     totalPrice:this.totalPrice,
  //     rating:5,
  //     comment:"Savrsen automobil",
  //     commentCreated:this.bsRangeValue[1]
  //   };
  //   this.rentService.addBookedCar(data).subscribe();
  //   this.message="Uspješno ste rentali vozilo!";
  //   setTimeout( () => {
  //    this.router.navigateByUrl("");
  //   } ,3000);

  // }

}
