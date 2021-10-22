export class Car{
    id: number;
    carName: string;
    yearOfProduction: number;
    numberOfDoors: number;
    pricePerDay: number;
    imageUrl: string;
    details: string;
    color: string;
    fuelTypeId: string;

    constructor(id:number, carName: string,  yearOfProduction: number,  numberOfDoors: number, pricePerDay: number, imageUrl: string, details: string, color: string, fuelType: string) {
        this.id = id;
        this.carName = carName;        
        this.yearOfProduction = yearOfProduction;        
        this.numberOfDoors = numberOfDoors;    
        this.pricePerDay = pricePerDay;        
        this.imageUrl = imageUrl;
        this.details = details;
        this.color = color;
        this.fuelTypeId = fuelType;
    }
}
