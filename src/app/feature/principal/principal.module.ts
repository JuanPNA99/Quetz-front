import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './news/news.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { PrincipalComponent } from './principal.component';
import { HomeComponent } from './home/home.component';
import { SearchThemeComponent } from './home/search-theme/search-theme.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { MytutorialsComponent } from './profile/mytutorials/mytutorials.component';
import { MyFollowersComponent } from './profile/my-followers/my-followers.component';
import { MyInformationComponent } from './profile/my-information/my-information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LinkModalComponent } from './tutorial/link-modal/link-modal.component';
import { TutorialCardComponent } from './home/tutorial-card/tutorial-card.component';
import { SpecificTutorialComponent } from './specific-tutorial/specific-tutorial.component';

@NgModule({
    declarations: [
        PrincipalComponent,
        HomeComponent,
        SearchThemeComponent,
        NewsComponent,
        NotificationsComponent,
        TutorialComponent,
        ProfileComponent,
        MytutorialsComponent,
        MyFollowersComponent,
        MyInformationComponent,
        LinkModalComponent,
        TutorialCardComponent,
        SpecificTutorialComponent,
    ],
    imports: [
        CommonModule,
        PrincipalRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        SharedModule,
        NgxSpinnerModule,
        SweetAlert2Module,
        FormsModule,
    ],
})
export class PrincipalModule {}
