import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = environment.url + "user/login";
  constructor(private http: HttpClient) { }

  login(username: string) {
    return this.http.get<User>(this.url + "?username=" + username);
  }

}
