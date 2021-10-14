import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/principal/principal.module').then(
        (module) => module.PrincipalModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./feature/authenticators/authenticators.module').then(
        (module) => module.AuthenticatorsModule
      ),
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
