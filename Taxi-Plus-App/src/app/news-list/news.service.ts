import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { News } from "./news.model";

@Injectable({
    providedIn: 'root'
  })

export class NewsService {

    private news: News[] = [
        new News(0, "Radno vrijeme poslovnice", "Radno vrijeme naše poslovnice je svakim danom osim nedjelje. Od ponedjeljka do petka od 08h do 16h, a subotom od 08h do 12h",
            new Date().toISOString(), "https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"),
        new News(1, "Neradni dan povodom Kurban bajrama", "Obavještavamo sve naše posjetioce, da dana 15.07.2021 naša poslovnica neće raditi zbog nastupajćeg Kurban bajrama!",
            new Date().toISOString(), "https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg")
    ];

    options = new HttpHeaders().set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

    constructor(private http: HttpClient) { }

    readonly url = environment.url + "news";


    getNews():Observable<News[]> {
        return this.http.get<News[]>(this.url, {'headers': this.options});
    }

    getNewsById(id: number) {
        return this.http.get<News>(this.url + "/" + id, { 'headers': this.options });

    }

    addNews(val: any): Observable<number> {
        return this.http.post<number>(this.url, val, { "headers": this.options });
      }

    deleteNews(val:any){
        return this.http.delete(this.url+'/'+val);
      }
}