export class FAQ {

    public id: number;
    public question: string;
    public email: string;
    public answer: string;

    constructor(id: number, question: string, email: string, answer: string) {
        this.id = id;
        this.question = question;
        this.email = email;
        this.answer = answer;
    }
}