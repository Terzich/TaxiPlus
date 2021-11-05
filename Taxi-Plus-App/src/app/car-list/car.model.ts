export class Car{
    id: number;
    carName: string;
    yearOfManufacturing: number;
    numberOfDoors: number;
    pricePerDay: number;
    image: string;
    details: string;
    color: string;
    fuelTypeId: string;

    constructor(id:number, carName: string,  yearOfProduction: number,  numberOfDoors: number, pricePerDay: number, imageUrl: string, details: string, color: string, fuelType: string) {
        this.id = id;
        this.carName = carName;        
        this.yearOfManufacturing = yearOfProduction;        
        this.numberOfDoors = numberOfDoors;    
        this.pricePerDay = pricePerDay;        
        this.image = imageUrl;
        this.details = details;
        this.color = color;
        this.fuelTypeId = fuelType;
    }
}
