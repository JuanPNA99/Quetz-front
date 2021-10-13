import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { SearchThemeComponent } from './principal/search-theme/search-theme.component';

@NgModule({
  declarations: [HomeComponent, PrincipalComponent, SearchThemeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
