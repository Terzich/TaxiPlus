import { Component, Input, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { Car } from '../../car.model';

@Component({
  selector: 'app-rent-request',
  templateUrl: './rent-request.component.html',
  styleUrls: ['./rent-request.component.css']
})
export class RentRequestComponent implements OnInit {

@Input() selectedCar: Car;
@Input() fromDate: NgbDate;
@Input() toDate: NgbDate | null;

fromDateTransformed: Date;

  constructor() { }

  ngOnInit(): void {
    console.log(this.fromDate.day);
      this.fromDateTransformed = new Date(this.fromDate.day, this.fromDate.month, this.fromDate.year);
  }

}
