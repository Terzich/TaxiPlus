import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../auth/login.service';
import { FAQ } from './faq.model';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {


  @ViewChild('f') form: NgForm;
  questions: FAQ[];
  isUserLoggedIn = false;


  constructor(private faqService: FaqService, private loginService: LoginService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.questions = this.faqService.getFaqsDummy();
    if (localStorage.getItem("token") !== null) {
      this.isUserLoggedIn = true;
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(localStorage.getItem('userId'))
    var val = {
      text: this.form.value.question,
      userId: localStorage.getItem('userId') == null ? null : Number(localStorage.getItem('userId'))
    };

    this.faqService.addQuestion(val).subscribe(qId => {
      console.log("uslo")
      if (qId !== 0) {
        if (!this.isUserLoggedIn)
          this.toastr.success('Uspješno ste postavili "anonimno pitanje"!', 'Pitanje postavljeno!');
        if (this.isUserLoggedIn)
          this.toastr.success('Uspješno ste postavili anonimno pitanje. Odgovor ćete dobiti u što skorijem roku!', 'Pitanje postavljeno!');
      }
    })

  }
}
