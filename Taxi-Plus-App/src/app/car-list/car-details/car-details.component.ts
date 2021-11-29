import { Component, Input, OnInit } from '@angular/core';
import { CarManufacturerService } from '../car-manufacturer.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

@Input() car: Car;

  constructor() { }

  ngOnInit(): void {
  }
}
