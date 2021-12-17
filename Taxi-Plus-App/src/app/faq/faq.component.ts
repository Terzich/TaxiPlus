import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../auth/login.service';
import { Notification } from '../user-notifications/notification.model';
import { NotificationService } from '../user-notifications/notification.service';
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


  constructor(private faqService: FaqService, private loginService: LoginService, private toastr: ToastrService, private notificationService: NotificationService) { }

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
    var val = {
      text: this.form.value.question,
      userId: localStorage.getItem('userId') == null ? null : Number(localStorage.getItem('userId'))
    };

    this.faqService.addQuestion(val).subscribe(qId => {
      if (qId !== 0) {
        if (this.isUserLoggedIn){
          var notification : Notification = {
            title: "Pitanje postavljeno osoblju!",
            text: "Uspješno ste postavili pitanje osoblju kompanije. Vaše pitanje glasi: ' "+ this.form.value.question + " '. Možete očekivati odgovor nakon što osoblje pregleda vaše pitanje!",
            userId: Number(localStorage.getItem('userId')),
            viewed: false
          };
          this.notificationService.addNotification(notification).subscribe();
          this.toastr.success('Uspješno ste postavili pitanje!', 'Pitanje postavljeno!');
        }
        if (!this.isUserLoggedIn)
          this.toastr.success('Uspješno ste postavili anonimno pitanje pitanje. Odgovor ćete dobiti u što skorijem roku od stranje osoblja!', 'Anonimno pitanje postavljeno!');
      }
    })

  }
}
