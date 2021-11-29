
export class RentedCar {
    public id?: number;
    public rentedFrom: Date;
    public rentedTo: Date;
    public totalPrice: number;
    public rentApproved: boolean;
    public requestCanceled: boolean;
    public userId: number;
    public userName?: string;
    public carId: number;
    public carName?: string;

    constructor(id: number, rentedFrom: Date, rentedTo: Date, totalPrice: number, rentApproved: boolean, requestCanceled: boolean,
        userId: number, carId: number) {

        this.id = id;
        this.rentedFrom = rentedFrom;
        this.rentedTo = rentedTo;
        this.totalPrice = totalPrice;
        this.rentApproved = rentApproved;
        this.requestCanceled = requestCanceled;
        this.userId = userId;
        this.carId = carId;
    }
}