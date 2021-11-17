import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/faq/faq.service';

@Component({
  selector: 'app-question-menu',
  templateUrl: './question-menu.component.html',
  styleUrls: ['./question-menu.component.css']
})
export class QuestionMenuComponent implements OnInit {


  questionList: any = [];

  ModalTitle: string;
  ActivateEditQuestionComp: boolean = false;
  car: any;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.refreshQuestionList();
  }

  refreshQuestionList() {
    this.faqService.getAllQuestionsFromServer().subscribe(data => {
      //this.questionList = data;
    console.log("data")

    });

  }

  // addClick(){
  //   this.car={
  //     id:0
  //   }
  //   this.ModalTitle="Odgovori na pitanje";
  //   this.ActivateAddEditDepComp=true;

  // }

  editClick(item: any){
    // this.car=item;
    // this.ModalTitle="Izmjeni podatke vozila";
    // this.ActivateAddEditDepComp=true;
  }

  deleteClick(item: any){
    // if(confirm('Da li ste sigurni??')){
    //   this.service.deleteCar(item.id).subscribe();
    //   this.refreshCarList();
    // }
  }

  closeClick(){
    // this.ActivateAddEditDepComp=false;
    // this.refreshCarList();
  }

}
