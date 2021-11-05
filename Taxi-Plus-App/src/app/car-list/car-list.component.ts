import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Car } from './car.model';
import { CarService } from './car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: Car[];
  savedCar: Car;
  selectedcar: string = 'Mercedes';
  detailsOpened: boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCarsFromServer().subscribe(carsFromAPI =>{
      // carsFromAPI.forEach(el => {
          // el.image = atob(el.image)
          // this.carList.push(el)
      // });
      this.carList = carsFromAPI
    } );
  }

  openDetails(car: Car) {
    if (this.detailsOpened)
      this.detailsOpened = false;
    else
      this.detailsOpened = true;
    this.savedCar = car;
  }

}
