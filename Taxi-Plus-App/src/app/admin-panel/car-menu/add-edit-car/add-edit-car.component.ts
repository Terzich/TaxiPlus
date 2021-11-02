import { Component, Input, OnInit } from '@angular/core';
import { CarService } from 'src/app/car-list/car.service';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.css']
})
export class AddEditCarComponent implements OnInit {

  constructor(private service:CarService) { }

  @Input() car:any;
  carId:number;
  carName:string;
  yearOfProduction: number;
  numberOfDoors: number;
  pricePerDay: number;
  fuelTypeId: string;
  colorId: string;
  carTypeId: string;
  carManufacturerId: string;

  ngOnInit(): void {
    this.carId=this.car.id;
    this.carName=this.car.carName;
  }

  addDepartment(){
    var val = {
                carName:this.carName,
                yearOfProduction: this.yearOfProduction,
                numberOfDoors: this.numberOfDoors,
                pricePerDay: this.pricePerDay,
                carManufacturerId: this.carManufacturerId,
                colorId: this.colorId,
                fuelTypeId: this.fuelTypeId,
                carTypeId: this.carTypeId,
              };
    this.service.addCar(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.carId,
      DepartmentName:this.carName};
    this.service.updateCar(val, this.carId).subscribe(res=>{
    alert(res.toString());
    });
  }

}
