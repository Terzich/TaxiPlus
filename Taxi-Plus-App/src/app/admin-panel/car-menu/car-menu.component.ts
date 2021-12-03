import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarManufacturerService } from 'src/app/car-list/car-manufacturer.service';
import { Car } from 'src/app/car-list/car.model';
import { CarService } from 'src/app/car-list/car.service';

@Component({
  selector: 'app-car-menu',
  templateUrl: './car-menu.component.html',
  styleUrls: ['./car-menu.component.css']
})
export class CarMenuComponent implements OnInit {

  constructor(private service:CarService, private router: Router, private multiService: CarManufacturerService) { }

  carList:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  car:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  color: string;
  carManufacturer: string;
  carType: string;
  fuelType: string;

  ngOnInit(): void {
    this.refreshCarList();
  }

  addClick(){
    this.car={
      id:0
    }
    this.ModalTitle="Dodaj vozilo";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item: any){
    this.car=item;
    this.ModalTitle="Izmjeni podatke vozila";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item: any){
    if(confirm('Da li ste sigurni??')){
      this.service.deleteCar(item.id).subscribe();
      this.refreshCarList();
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshCarList();
  }


  refreshCarList(){
    this.service.getCarsFromServer().subscribe(data=>{
      this.carList=data;
      this.DepartmentListWithoutFilter=data;
    });
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

  FilterFn(){
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.carList = this.DepartmentListWithoutFilter.filter(function (el: any){
        return el.DepartmentId.toString().toLowerCase().includes(
          DepartmentIdFilter.toString().trim().toLowerCase()
        )&&
        el.DepartmentName.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: any, asc: any){
    this.carList = this.DepartmentListWithoutFilter.sort(function(a: any, b: any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
