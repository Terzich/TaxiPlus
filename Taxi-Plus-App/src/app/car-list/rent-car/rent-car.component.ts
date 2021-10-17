import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
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

  @Input() Car:Car;

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  totalPrice:number;
  message:string;

  constructor(private route: ActivatedRoute,private carService : CarService, private router:Router, calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
   }

  ngOnInit(): void {
    
    this.route.params.subscribe(
      (param: Params) => {
        this.Car = this.carService.getCarById(+param['id']);
      }
    );
  }

  calculatePrice():void{
    const diffInMs = Math.abs(this.bsRangeValue[1].valueOf() - this.bsRangeValue[0].valueOf());
   var r= diffInMs / (1000 * 60 * 60 * 24);
    this.totalPrice=this.Car.pricePerDay*r;
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
