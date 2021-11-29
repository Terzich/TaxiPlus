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
  question: any;
  filterType = "";
  questionFiltered = false;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.refreshQuestionList();
  }

  refreshQuestionList() {
    this.faqService.getAllQuestionsFromServer().subscribe(data => {
      this.questionList = data;
      console.log("data")

    });

  }

  editClick(item: any) {
    this.question = item;
    this.ModalTitle = "Odgovori na pitanje";
    this.ActivateEditQuestionComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Da li ste sigurni??')) {
      this.faqService.deleteQuestion(item.id).subscribe();
      this.refreshQuestionList();
    }
  }

  closeClick() {
    this.ActivateEditQuestionComp = false;
    this.refreshQuestionList();
  }

  changeFilterType(checkbox: any) {
    if (this.filterType === '')
      this.filterType = checkbox;
    else
      this.filterType = '';
  }

  filterQuestions() {
    this.faqService.getAllQuestionsFromServerWithFilter(this.filterType).subscribe(data => {
      console.log(data);
      this.questionList = data;
    });
    if (this.filterType === '')
      this.questionFiltered = false;
    else
      this.questionFiltered = true;
  }

}
