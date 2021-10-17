import { Injectable } from '@angular/core';
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

  getCars() {
    return this.cars.slice();
  }

  getCarById(id: number) {
    return this.cars[id];
  }
}
