import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FAQ } from './faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  options = new HttpHeaders().set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

constructor(private http: HttpClient) { }
readonly url = environment.url + "question";

  private faqs : FAQ[] = [
    new FAQ(1, "Koje je radno vrijem vaše poslovnice?", 1, "Naše radno vrijeme je od 08:00h do 20:00h svakim radnim danom, vikendi su neradni s tim da je svaka 3 subota radna!"),
    new FAQ(2, "Da li je moguće iznajmiti vozilo na duži period?", 2, "Da, ukoliko ste zainteresovani, imate mogućnost izajmljivanja vozila putem ove aplikacije."),
    new FAQ(3, "Gdje se nalazi vaša poslovnica?", 3, "Naša poslovnica se nalazi u Bugojnu u ulici Sultan Ahmedova")
  ];

  getFaqsDummy() {
    return this.faqs.slice();
  }


  getAllQuestionsFromServer(): Observable<FAQ[]> {
    return this.http.get<FAQ[]>(this.url, { "headers": this.options });
  }

  getAllQuestionsFromServerWithFilter(filter: string): Observable<FAQ[]> {
    return this.http.get<FAQ[]>(this.url + "/getByFilter?filter=" + filter, { "headers": this.options });
  }

  addQuestion(val: any): Observable<number> {
    return this.http.post<number>(this.url, val, { "headers": this.options });
  }

  answerQuestion(val:any, questionId:number){
    return this.http.put(this.url+'/'+questionId,val);
  }

  deleteQuestion(val:any){
    return this.http.delete(this.url+'/'+val);
  }
}
