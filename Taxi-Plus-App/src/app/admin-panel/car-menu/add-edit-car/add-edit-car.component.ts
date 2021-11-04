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
  yearOfManufacturing: number;
  numberOfDoors: number;
  pricePerDay: number;
  fuelTypeId: number;
  colorId: number;
  carTypeId: number;
  carManufacturerId: number;

  PhotoFileName:string;
  PhotoFilePath:string;

  ngOnInit(): void {
    this.carId=this.car.id;
    this.carName=this.car.carName;
    this.PhotoFileName = this.car.imageUrl;
    this.PhotoFilePath = this.service.url+'/image-upload'+this.PhotoFileName;
  }

  addDepartment(){
    var val = {
                carName:this.carName,
                yearOfManufacturing: this.yearOfManufacturing,
                numberOfDoors: this.numberOfDoors,
                pricePerDay: this.pricePerDay,
                carManufacturerId: this.carManufacturerId,
                colorId: this.colorId,
                fuelTypeId: this.fuelTypeId,
                carTypeId: this.carTypeId,
                imageUrl: this.PhotoFileName
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

  uploadPhoto(event: any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.service.uploadImage(formData).subscribe((data:any)=>{
       this.PhotoFileName=data.toString();
       this.PhotoFilePath=this.service.url+'/image-upload'+this.PhotoFileName;
      console.log(data);
    })
  }

}
