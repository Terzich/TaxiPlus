import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../car.model';
import { RentedCar } from './rented-car.model';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  options = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }
  readonly url = environment.url + "rentedcar";

  getRentedCarsFromServer(): Observable<RentedCar[]> {
    return this.http.get<RentedCar[]>(this.url, { 'headers': this.options });
  }

  getCarById(id: number): Observable<RentedCar> {
    return this.http.get<RentedCar>(this.url + "/" + id, { 'headers': this.options });
  }

  getRentForSingleCar(carId: number): Observable<RentedCar[]> {
    return this.http.get<RentedCar[]>(this.url + "/getByCarId/" + carId, { 'headers': this.options });
  }

  getRentForSingleUser(carId: number): Observable<RentedCar[]> {
    return this.http.get<RentedCar[]>(this.url + "/getByUserId/" + carId, { 'headers': this.options });
  }

  getAllRequestsFromServerWithFilter(filter: string): Observable<RentedCar[]> {
    return this.http.get<RentedCar[]>(this.url + "/getByFilter?filter=" + filter, { "headers": this.options });
  }

  addBookedCar(rentRequest: RentedCar): Observable<number> {
    return this.http.post<number>(this.url, rentRequest, { "headers": this.options });
  }

  updateBookedCar(val: any, bookedCarId: number) {
    return this.http.put(this.url + '/' + bookedCarId, val);
  }

  deleteRentRequest(val: any) {
    return this.http.delete(this.url + '/' + val);
  }
}
