import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { NewsListComponent } from "./news-list/news-list.component";

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path:'news', component: NewsListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}