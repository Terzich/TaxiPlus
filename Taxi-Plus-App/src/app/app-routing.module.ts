import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { CarMenuComponent } from "./admin-panel/car-menu/car-menu.component";
import { DashboardComponent } from "./admin-panel/dashboard/dashboard.component";
import { AuthGuard } from "./auth/auth.guard";
import { CarListComponent } from "./car-list/car-list.component";
import { RentCarComponent } from "./car-list/rent-car/rent-car.component";
import { CompanyOfferComponent } from "./company-offer/company-offer.component";
import { FaqComponent } from "./faq/faq.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NewsDetailComponent } from "./news-list/news-detail/news-detail.component";
import { NewsListComponent } from "./news-list/news-list.component";

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'news', component: NewsListComponent },
    { path: 'news/:id', component: NewsDetailComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'company-offer', component: CompanyOfferComponent },
    { path: 'car-list', component: CarListComponent },
    { path: 'rentcar/:id', component: RentCarComponent },
    {
        path: 'adminpanel', component: AdminPanelComponent, canActivate: [AuthGuard] ,children: [
            { path: '', component: DashboardComponent },
            { path: 'car-menu', component: CarMenuComponent }


        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}