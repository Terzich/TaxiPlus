import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  options = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }
  readonly url = environment.url + "notification";

  getAllNotificationsForUser(id: number) {
    return this.http.get<Notification[]>(this.url + "/getByUserId/" + id, { 'headers': this.options });
  }

  getNewNotificationsForUser(id: number) {
    return this.http.get<Notification[]>(this.url, { 'headers': this.options });
  }

  // getCarById(id: number): Observable<Car> {

  //   return this.http.get<Car>(this.url + "/"+id, { 'headers': this.options });
  // }

  // addCar(val: any): Observable<number> {
  //   return this.http.post<number>(this.url, val, { "headers": this.options });
  // }

  // updateCar(val:any, carId:number){
  //   return this.http.put(this.url+'/'+carId,val);
  // }

  // deleteCar(val:any){
  //   return this.http.delete(this.url+'/'+val);
  // }
}
