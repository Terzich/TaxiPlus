

export class News {

    public id: number;
    public title: string;
    public content: string;
    public publishedAt: string;
    public image: string;

    constructor(id: number, title: string, content: string, publishedAt: string, image: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.publishedAt = publishedAt;
        this.image = image;
    }
}