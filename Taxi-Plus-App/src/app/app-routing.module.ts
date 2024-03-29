import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { CarMenuComponent } from "./admin-panel/car-menu/car-menu.component";
import { DashboardComponent } from "./admin-panel/dashboard/dashboard.component";
import { NewsMenuComponent } from "./admin-panel/news-menu/news-menu.component";
import { QuestionMenuComponent } from "./admin-panel/question-menu/question-menu.component";
import { RentMenuComponent } from "./admin-panel/rent-menu/rent-menu.component";
import { AuthGuard } from "./auth/auth.guard";
import { RegistrationComponent } from "./auth/registration/registration.component";
import { CarListComponent } from "./car-list/car-list.component";
import { RentCarComponent } from "./car-list/rent-car/rent-car.component";
import { CompanyOfferComponent } from "./company-offer/company-offer.component";
import { FaqComponent } from "./faq/faq.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NewsDetailComponent } from "./news-list/news-detail/news-detail.component";
import { NewsListComponent } from "./news-list/news-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RentRequestsComponent } from "./rent-requests/rent-requests.component";
import { UserNotificationsComponent } from "./user-notifications/user-notifications.component";
import { UserPanelComponent } from "./user-panel/user-panel.component";

const routes: Routes = [
   
    { path: 'not-found', component: NotFoundComponent},
    {
        path: 'adminpanel', component: AdminPanelComponent, canActivate: [AuthGuard] ,children: [
            { path: '', component: DashboardComponent },
            { path: 'car-menu', component: CarMenuComponent },
            { path: 'news-menu', component: NewsMenuComponent },
            { path: 'question-menu', component: QuestionMenuComponent },
            { path: 'rent-menu', component: RentMenuComponent }
        ]
    },
    {
        path: '', component: UserPanelComponent, children: [
            { path: '', component: HomepageComponent },
            { path: 'car-menu', component: CarMenuComponent },
            { path: 'news-menu', component: NewsMenuComponent },
            { path: 'news', component: NewsListComponent },
            { path: 'news/:id', component: NewsDetailComponent },
            { path: 'faq', component: FaqComponent },
            { path: 'company-offer', component: CompanyOfferComponent },
            { path: 'car-list', component: CarListComponent },
            { path: 'user-notifications', component: UserNotificationsComponent},
            { path: 'rent-requests', component: RentRequestsComponent},
            { path: 'rentcar/:id', component: RentCarComponent }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterModule.forRoot(routes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules,
            scrollPositionRestoration: 'top',
          })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}