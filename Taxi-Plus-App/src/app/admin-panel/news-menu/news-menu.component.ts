import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news-list/news.service';


@Component({
  selector: 'app-news-menu',
  templateUrl: './news-menu.component.html',
  styleUrls: ['./news-menu.component.css']
})
export class NewsMenuComponent implements OnInit {

  constructor(private service: NewsService, private router: Router) { }

  newsList:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  news:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    if(localStorage.getItem('roleId') === '2'){
      this.router.navigate(['/not-found'])
   }
    this.refreshNewsList();
  }

  addClick(){
    this.news={
      id:0
    }
    this.ModalTitle="Dodaj novost";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item: any){
    this.news=item;
    this.ModalTitle="Izmijeni informacije o novosti";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item: any){
    if(confirm('Da li ste sigurni??')){
      this.service.deleteNews(item.id).subscribe();
      this.refreshNewsList();
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshNewsList();
  }


  refreshNewsList(){
    this.service.getNews().subscribe(data=>{
      this.newsList=data;
      this.newsList.reverse();
      this.DepartmentListWithoutFilter=data;
    });
  }

  FilterFn(){
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.newsList = this.DepartmentListWithoutFilter.filter(function (el: any){
        return el.DepartmentId.toString().toLowerCase().includes(
          DepartmentIdFilter.toString().trim().toLowerCase()
        )&&
        el.DepartmentName.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: any, asc: any){
    this.newsList = this.DepartmentListWithoutFilter.sort(function(a: any, b: any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
