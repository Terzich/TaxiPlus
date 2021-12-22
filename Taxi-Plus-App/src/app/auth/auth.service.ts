import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, ReplaySubject, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = environment.url + "user";
  private loggedIn: Subject<boolean> = new ReplaySubject<boolean>(1);
  constructor(private http: HttpClient) { }

  login(username: string) {
    return this.http.get<any>(this.url + "/login?username=" + username).pipe(
      tap(() => this.loggedIn.next(true)
    ));
  }
  registration (val: any){
    return this.http.post(this.url, val);
  }
  loginStatusChange(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
