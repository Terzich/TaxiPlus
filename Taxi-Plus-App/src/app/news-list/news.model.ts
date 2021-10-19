export class News {

    public id: number;
    public newsTitle: string;
    public content: string;
    public publishedAt: string;
    public imageUrl: string;

    constructor(id: number, title: string, content: string, publishedAt: string, image: string) {
        this.id = id;
        this.newsTitle = title;
        this.content = content;
        this.publishedAt = publishedAt;
        this.imageUrl = image;
    }
}