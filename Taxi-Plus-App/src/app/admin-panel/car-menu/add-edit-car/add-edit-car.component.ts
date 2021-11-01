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

  ngOnInit(): void {
    this.carId=this.car.id;
    this.carName=this.car.carName;
  }

  addDepartment(){
    var val = {DepartmentId:this.carId,
                DepartmentName:this.carName};
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
