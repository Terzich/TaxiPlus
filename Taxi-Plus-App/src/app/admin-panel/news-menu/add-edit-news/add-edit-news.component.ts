import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { CarManufacturer } from 'src/app/car-list/car-manufacturer.model';
import { CarManufacturerService } from 'src/app/car-list/car-manufacturer.service';
import { CarService } from 'src/app/car-list/car.service';
import { News } from 'src/app/news-list/news.model';

@Component({
  selector: 'app-add-edit-news',
  templateUrl: './add-edit-news.component.html',
  styleUrls: ['./add-edit-news.component.css']
})
export class AddEditNewsComponent implements OnInit {

  checkedNumber: number;

  constructor(private service:CarService, private carManufacturerService: CarManufacturerService, 
    private router: Router) { }

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

  newsTitle: string;
  @Input() news: News;

  carManufacturerList: CarManufacturer[];
  fuelTypeList: any[];
  colorList: any[];
  carTypeList: any[];


  PhotoFileName:string;
  PhotoFilePath:string;
  role = localStorage.getItem('roleId')?.toString(); 
  ngOnInit(): void {
    if(localStorage.getItem('roleId') === '2'){
      console.log("add-car")
       this.router.navigate(['/not-found'])
    }
    this.newsTitle = this.news.newsTitle;
    // this.carId=this.car.id;
    // this.carName=this.car.carName;
    // this.yearOfManufacturing = this.car.yearOfManufacturing;
    // this.colorId = this.car.colorId;
    // this.fuelTypeId = this.car.fuelTypeId;
    // this.carTypeId = this.car.carTypeId;
    // this.carManufacturerId = this.car.carManufacturerId;
    // this.numberOfDoors = this.car.numberOfDoors;
    // this.croppedImage = this.croppedImage !== undefined ?  "data:image/png;base64," + this.car.image : '';
    // this.carManufacturerService.getCarManufacturersFromServer().subscribe(cmFromServer => {
    //   this.carManufacturerList = cmFromServer;
    // });

    // this.carManufacturerService.getFuelTypesFromServer().subscribe(ftFromServer => {
    //   this.fuelTypeList = ftFromServer;
    // });
    
    // this.carManufacturerService.getColorsFromServer().subscribe(cFromServer => {
    //   this.colorList = cFromServer;
    // });

    // this.carManufacturerService.getCarTypesFromServer().subscribe(ctFromServer => {
    //   this.carTypeList = ctFromServer;
    // });
  }
  onItemChange(event: any){
    console.log(event.target.value)
    this.checkedNumber;
  }

  addDepartment(){
    var val = {
                carName:this.carName,
                yearOfManufacturing: this.yearOfManufacturing,
                numberOfDoors: Number(this.numberOfDoors),
                pricePerDay: 50,
                carManufacturerId:  Number(this.carManufacturerId),
                colorId: Number(this.colorId),
                fuelTypeId: Number(this.fuelTypeId),
                carTypeId: Number(this.carTypeId),
                image: this.base64Slika
              };
    this.service.addCar(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    
    var val = {carName: this.carName,
      numberOfDoors:this.numberOfDoors,
      yearOfManufacturing:this.yearOfManufacturing,
      pricePerDay:this.pricePerDay,
      carManufacturerId: Number(this.carManufacturerId),
      colorId:this.colorId,
      fuelTypeId:this.fuelTypeId,
      carTypeId:this.carTypeId,
      image : String(this.croppedImage).replace('data:image/png;base64,', '')
    };
    this.service.updateCar(val, this.car.id).subscribe(res=>{
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

  onSubmit(form: NgForm) {
    console.log(form);
  }

  

}
