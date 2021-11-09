import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  options = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }
  readonly url = environment.url + "user";

  getUsersFromServer(): Observable<User[]> {

    return this.http.get<User[]>(this.url, { 'headers': this.options });

  }

  getUserById(id: number): Observable<User> {

    return this.http.get<User>(this.url + "/" + id, { 'headers': this.options });
  }
  getUserRoleId(){
    return  Number(localStorage.getItem('roleId')) === 2 ? true : false
  }
}
