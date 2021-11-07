import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarManufacturer } from './car-manufacturer.model';

@Injectable({
  providedIn: 'root'
})
export class CarManufacturerService {

  options = new HttpHeaders().set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  
  constructor(private http: HttpClient) { }

  readonly url = environment.url;

  getCarManufacturersFromServer(): Observable<CarManufacturer[]> {

    return this.http.get<CarManufacturer[]>(this.url + "carmanufacturer", { 'headers': this.options });

  }

  getFuelTypesFromServer(): Observable<any[]> {

    return this.http.get<CarManufacturer[]>(this.url + "fueltype", { 'headers': this.options });

  }

  getColorsFromServer(): Observable<any[]> {

    return this.http.get<CarManufacturer[]>(this.url + "color", { 'headers': this.options });

  }

  getCarTypesFromServer(): Observable<any[]> {

    return this.http.get<CarManufacturer[]>(this.url + "cartype", { 'headers': this.options });

  }
}
