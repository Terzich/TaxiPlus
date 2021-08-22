import { News } from "./news.model";

export class NewsService {

    private news : News[] = [
        new News(1, "Radno vrijeme poslovnice", "Radno vrijeme naše poslovnice je svakim danom osim nedjelje. Od ponedjeljka do petka od 08h do 16h, a subotom od 08h do 12h",
        new Date().toISOString(), "https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"),
        new News(2, "Neradni dan povodom Kurban bajrama", "Obavještavamo sve naše posjetioce, da dana 15.07.2021 naša poslovnica neće raditi zbog nastupajćeg Kurban bajrama!",
        new Date().toISOString(), "https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg")
    ];

    getNews() {
        return this.news.slice();
    }
    
    getNewsById(id: number) {
        return this.news[id];
    } 
}