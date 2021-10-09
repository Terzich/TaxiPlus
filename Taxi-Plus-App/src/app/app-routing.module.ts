import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompanyOfferComponent } from "./company-offer/company-offer.component";
import { FaqComponent } from "./faq/faq.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NewsDetailComponent } from "./news-list/news-detail/news-detail.component";
import { NewsListComponent } from "./news-list/news-list.component";

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path:'news', component: NewsListComponent},
    {path: 'news/:id', component: NewsDetailComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'company-offer', component: CompanyOfferComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}