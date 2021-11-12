import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { CarManufacturer } from 'src/app/car-list/car-manufacturer.model';
import { CarManufacturerService } from 'src/app/car-list/car-manufacturer.service';
import { CarService } from 'src/app/car-list/car.service';
import { News } from 'src/app/news-list/news.model';
import { NewsService } from 'src/app/news-list/news.service';
import { StringLiteralLike } from 'typescript';

@Component({
  selector: 'app-add-edit-news',
  templateUrl: './add-edit-news.component.html',
  styleUrls: ['./add-edit-news.component.css']
})
export class AddEditNewsComponent implements OnInit {

  checkedNumber: number;

  constructor(private service:NewsService, private router: Router) { }

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
  content: string;

  @Input() news: News;
  @ViewChild('f') form:NgForm

  imageChangedEvent: any = '';
  public base64Slika: string;
  croppedImage: any = '';

  carManufacturerList: CarManufacturer[];
  fuelTypeList: any[];
  colorList: any[];
  carTypeList: any[];


  PhotoFileName:string;
  PhotoFilePath:string;
  role = localStorage.getItem('roleId')?.toString(); 

  ngOnInit(): void {
    if(localStorage.getItem('roleId') === '2'){
       this.router.navigate(['/not-found'])
    }
    this.newsTitle = this.news.newsTitle;
    this.content = this.news.content;
  
  }

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

  onSubmit() {
  if(!this.form.valid){
      return;
  }
   if(this.news.id == 0){
    var val = {
      newsTitle: this.form.value.newsTitle,
      content: this.form.value.content,
      image: this.base64Slika

    };
    this.service.addNews(val).subscribe(res => {
      alert("Vijest uspješno dodana. Id vijesti -" + res.toString());
    })
   }
   else{
    var val = {
      newsTitle: this.form.value.newsTitle,
      content: this.form.value.content,
      image: this.base64Slika

    };
    this.service.updateNews(val, this.news.id).subscribe(res => {
      alert("Vijest uspješno izmjenjena. Id vijesti -" + res.toString());
    })
   }

  }

  

}
