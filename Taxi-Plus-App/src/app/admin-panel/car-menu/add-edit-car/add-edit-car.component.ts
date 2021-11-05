import { Component, Input, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
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
                image: this.base64Slika
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
  imageChangedEvent: any = '';
  public base64Slika: string;
  croppedImage: any = '';

  handleReaderLoaded(readerEvt : any) {
    var binaryString = readerEvt.target.result;
    this.base64Slika = btoa(binaryString);
  }
  fileChangeEvent($event: any) {

    this.imageChangedEvent = event;
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var reader = new FileReader();
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
    var myReader: FileReader = new FileReader();
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
    };
    myReader.readAsDataURL(file);
  }
  imageCropped(event: ImageCroppedEvent){
    this.croppedImage = event.base64
  }


}
