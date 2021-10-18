import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = [
    new Car(1, "Golf", 2012, 5, 50, "https://www.freeiconspng.com/uploads/volkswagen-car-png-image-7.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi maiores nostrum dicta culpa? Labore aspernatur, repellendus consequatur accusamus assumenda est nisi delectus nam impedit nemo ipsum tempore rerum commodi.", "Crvena"),
    new Car(2, "Audi", 2013, 5, 50, "https://www.freeiconspng.com/uploads/audi-jeep-q3-car-png-7.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi maiores nostrum dicta culpa? Labore aspernatur, repellendus consequatur accusamus assumenda est nisi delectus nam impedit nemo ipsum tempore rerum commodi.", "Plava"),
    new Car(3, "Mercedes", 2011, 5, 50, "https://www.freeiconspng.com/uploads/car-png-27.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi maiores nostrum dicta culpa? Labore aspernatur, repellendus consequatur accusamus assumenda est nisi delectus nam impedit nemo ipsum tempore rerum commodi.", "Crna")
  ];

  options = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }
  readonly url = environment.url + "car";
  getCars() {
    return this.cars.slice();
  }

  // getCarById(id: number) {
  //   return this.cars[id];
  // }

  getCarsFromServer(): Observable<Car[]> {

    return this.http.get<Car[]>(this.url, { 'headers': this.options });

  }

  getCarById(id: number): Observable<Car> {

    //const url = `${this.apiUrl}/${id}`;
    return this.http.get<Car>(this.url + "/"+id, { 'headers': this.options });

  }

}
