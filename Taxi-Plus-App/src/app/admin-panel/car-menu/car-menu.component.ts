import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/car-list/car.service';

@Component({
  selector: 'app-car-menu',
  templateUrl: './car-menu.component.html',
  styleUrls: ['./car-menu.component.css']
})
export class CarMenuComponent implements OnInit {

  constructor(private service:CarService) { }

  carList:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item: any){
    this.dep=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item: any){
    // if(confirm('Are you sure??')){
    //   this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
    //     alert(data.toString());
    //     this.refreshDepList();
    //   })
    // }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getCarsFromServer().subscribe(data=>{
      this.carList=data;
      this.DepartmentListWithoutFilter=data;
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
