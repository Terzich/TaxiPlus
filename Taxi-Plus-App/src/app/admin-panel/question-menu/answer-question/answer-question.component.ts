import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FaqService } from 'src/app/faq/faq.service';

@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent implements OnInit {

  constructor(private service:FaqService, private router: Router) { }

  @Input() question:any;
 

  text: string;
  userId: number;
  answer: string;

  @ViewChild('f') form:NgForm


  role = localStorage.getItem('roleId')?.toString(); 

  ngOnInit(): void {
    if(localStorage.getItem('roleId') === '2'){
       this.router.navigate(['/not-found'])
    }
    this.text = this.question.text;
    this.userId = this.question.userId;
  
  }

  onSubmit() {
  if(!this.form.valid){
      return;
  }
 

  }

}
