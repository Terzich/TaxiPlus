import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/car-list/rent-car/rent.service';

@Component({
  selector: 'app-rent-menu',
  templateUrl: './rent-menu.component.html',
  styleUrls: ['./rent-menu.component.css']
})
export class RentMenuComponent implements OnInit {

  rentedCarList: any = [];

  ModalTitle: string;
  ActivateRentDetails: boolean = false;
  rent: any;
  filterType = "";
  requestFiltered = false;

  constructor(private rentService: RentService) { }

  ngOnInit(): void {
    this.refreshRentList();
  }

  refreshRentList() {
    this.rentService.getRentedCarsFromServer().subscribe(data => {
      this.rentedCarList = data;
      console.log("data")
    });

  }

  editClick(item: any) {
    this.rent = item;
    this.ModalTitle = "Detalji zahtjeva za iznajmljivanje";
    this.ActivateRentDetails = true;
  }

  deleteClick(item: any) {
    if (confirm('Da li ste sigurni??')) {
      this.rentService.deleteRentRequest(item.id).subscribe();
      this.refreshRentList();
    }
  }

  closeClick() {
    this.ActivateRentDetails = false;
    this.refreshRentList();
  }

  changeFilterType(checkbox: any) {
    if (this.filterType === '')
      this.filterType = checkbox;
    else
      this.filterType = '';
  }

  filterQuestions() {
    this.rentService.getAllRequestsFromServerWithFilter(this.filterType).subscribe(data => {
      console.log(data);
      this.rentedCarList = data;
    });
    if (this.filterType === '')
      this.requestFiltered = false;
    else
      this.requestFiltered = true;
  }
}
