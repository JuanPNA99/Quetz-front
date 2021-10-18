import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PrincipalComponent } from './principal.component';
import { ProfileComponent } from './profile/profile.component';
import { SpecificTutorialComponent } from './specific-tutorial/specific-tutorial.component';

import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'news',
                component: NewsComponent,
            },
            {
                path: 'notifications',
                component: NotificationsComponent,
            },
            {
                path: 'tutorial',
                component: TutorialComponent,
            },
            {
                path: 'tutorial/:id',
                component: SpecificTutorialComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrincipalRoutingModule {}
