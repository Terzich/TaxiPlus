import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FAQ } from './faq.model';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqForm: FormGroup
  questions: FAQ[];

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.initForm();
    this.questions = this.faqService.getFaqs();
  }

  private initForm() {

    this.faqForm = new FormGroup({
      'question' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.email)
    })
  }

  onSubmit(){
    console.log(this.faqForm);
  }
}
