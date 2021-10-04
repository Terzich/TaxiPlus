import { Injectable } from '@angular/core';
import { FAQ } from './faq.model';

// @Injectable({
//   providedIn: 'root'
// })
export class FaqService {
  private faqs : FAQ[] = [
    new FAQ(1, "Koje je radno vrijem vaše poslovnice?", "test.user@hotmail.com", "Nase radno vrijeme je od 08:00h do 20:00h svakim radnim danom, vikendi su neradni!"),
    new FAQ(1, "Koje je radno vrijem vaše poslovnice?", "test.user@hotmail.com", "Nase radno vrijeme je od 08:00h do 20:00h svakim radnim danom, vikendi su neradni!"),
    new FAQ(1, "Koje je radno vrijem vaše poslovnice?", "test.user@hotmail.com", "Nase radno vrijeme je od 08:00h do 20:00h svakim radnim danom, vikendi su neradni!")
  ];

  getFaqs() {
    return this.faqs.slice();
  }
}
