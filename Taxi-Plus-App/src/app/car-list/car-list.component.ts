import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { CarManufacturerService } from './car-manufacturer.service';
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

  color: string;
  carManufacturer: string;
  carType: string;
  fuelType: string;


  constructor(private carService: CarService, private multiService: CarManufacturerService) { }

  ngOnInit(): void {
    this.carService.getCarsFromServer().subscribe(carsFromAPI => {
      this.carList = carsFromAPI
    });
  }

  openDetails(car: Car) {
    this.loadAdditionalCarData(car);
    setTimeout(() => {
      this.mapSavedCar(car);
    }, 100);
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

  mapSavedCar(car: Car) {
    this.savedCar = car;
    this.savedCar.fuelType = this.fuelType;
    this.savedCar.carType = this.carType;
    this.savedCar.carManufacturer = this.carManufacturer;
    this.savedCar.color = this.color;
  }

}
