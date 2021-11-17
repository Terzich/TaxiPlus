export class FAQ {

    public id: number;
    public text: string;
    public userId: number;
    public answer: string;

    constructor(id: number, question: string, userId: number, answer: string) {
        this.id = id;
        this.text = question;
        this.userId = userId;
        this.answer = answer;
    }
}