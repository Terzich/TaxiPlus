import { parseConfigFileTextToJson } from "typescript";

export class User{
    public id: number;
    public firstName: string;
    public lastName: string;
    public birthDate: Date;
    public phoneNumber: string;
    public address: string;
    public imageUrl: string;
    public cityName: string;
    public gender: string;
    public username: string;
    public email: string;
    public password: string;
    public roleId: number;

    constructor(id: number, firstName:string, lastName:string, birthDate:Date, phoneNumber:string, address:string, 
        imageUrl:string, cityName:string, gender:string, userName: string, email:string, password: string, roleId: number) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthDate = birthDate;
            this.phoneNumber = phoneNumber;
            this.imageUrl = imageUrl;
            this.cityName = cityName;
            this.gender = gender;
            this.username = userName;
            this.email = email;
            this.password = password;
            this.roleId = roleId;
        }
}