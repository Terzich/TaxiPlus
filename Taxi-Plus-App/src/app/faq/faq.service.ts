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
    new FAQ(1, "Koje je radno vrijem vaše poslovnice?", 1, "Nase radno vrijeme je od 08:00h do 20:00h svakim radnim danom, vikendi su neradni!"),
    new FAQ(2, "Koje je radno vrijem vaše poslovnice?", 2, "Nase radno vrijeme je od 08:00h do 20:00h svakim radnim danom, vikendi su neradni!"),
    new FAQ(3, "Koje je radno vrijem vaše poslovnice?", 3, "Nase radno vrijeme je od 08:00h do 20:00h svakim radnim danom, vikendi su neradni!")
  ];

  getFaqsDummy() {
    return this.faqs.slice();
  }


  getAllQuestionsFromServer(): Observable<FAQ[]> {
    return this.http.get<FAQ[]>(this.url, { "headers": this.options });
  }

  addQuestion(val: any): Observable<number> {
    return this.http.post<number>(this.url, val, { "headers": this.options });
  }
}
