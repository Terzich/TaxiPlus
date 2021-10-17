export class Car{
    id: number;
    carName: string;
    yearOfProduction: number;
    numberOfDoors: number;
    pricePerDay: number;
    imageUrl: string;
    details: string;
    color: string;

    constructor(id:number, carName: string,  yearOfProduction: number,  numberOfDoors: number, pricePerDay: number, imageUrl: string, details: string, color: string) {
        this.id = id;
        this.carName = carName;        
        this.yearOfProduction = yearOfProduction;        
        this.numberOfDoors = numberOfDoors;    
        this.pricePerDay = pricePerDay;        
        this.imageUrl = imageUrl;
        this.details = details;
        this.color = color;
    }
}