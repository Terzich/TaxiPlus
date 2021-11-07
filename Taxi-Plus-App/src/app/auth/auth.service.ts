import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = environment.url + "user";
  constructor(private http: HttpClient) { }

  login(username: string) {
    return this.http.get<any>(this.url + "/login?username=" + username);
  }
  registration (val: any){
    return this.http.post(this.url, val)
  }
}
