import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {

    this.faqForm = new FormGroup({
      'question' : new FormControl(),
      'email' : new FormControl()
    })
  }

  onSubmit(){
    console.log(this.faqForm);
  }
}
