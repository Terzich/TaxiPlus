import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../auth/login.service';
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
  isUserLoggedIn = false;

  constructor(private faqService: FaqService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.initForm();
    this.questions = this.faqService.getFaqsDummy();
    if (localStorage.getItem("token") !== null)
      this.isUserLoggedIn = true;
  }

  private initForm() {

    this.faqForm = new FormGroup({
      'question': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    console.log(this.faqForm.value)
    // if(this.faqForm.invalid){
    //   return;
    // }
    // var val = {
    //   userId: localStorage.getItem("userId"),
    //   text = this.faqForm.value
    // }
 
  }
}
