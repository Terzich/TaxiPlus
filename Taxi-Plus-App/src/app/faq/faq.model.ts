export class FAQ {

    public id: number;
    public text: string;
    public userId: number;
    public answer: string;
    public nameAndSurname: string;
    public username: string;
    public email: string;


    constructor(id: number, question: string, userId: number, answer: string) {
        this.id = id;
        this.text = question;
        this.userId = userId;
        this.answer = answer;
    }
}