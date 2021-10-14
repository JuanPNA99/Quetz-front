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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalComponent,
    HomeComponent,
    SearchThemeComponent,
    NewsComponent,
    NotificationsComponent,
    TutorialComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
})
export class PrincipalModule {}
