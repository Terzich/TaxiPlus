

export class News {

    public title: string;
    public content: string;
    public publishedAt: string;
    public image: string;

    constructor(title: string, content: string, publishedAt: string, image: string) {
        this.title = title;
        this.content = content;
        this.publishedAt = publishedAt;
        this.image = image;
    }
}