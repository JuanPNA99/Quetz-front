import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatorsComponent } from './authenticators.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopicsComponent } from './register/topics/topics.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatorsComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: RegisterComponent,
      },
      {
        path: 'topics',
        component: TopicsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatorsRoutingModule {}
