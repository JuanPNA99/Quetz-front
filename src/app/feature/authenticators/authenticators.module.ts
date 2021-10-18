import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticatorsComponent } from './authenticators.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticatorsRoutingModule } from './authenticators-routing.module';
import { TopicsComponent } from './register/topics/topics.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        AuthenticatorsComponent,
        RegisterComponent,
        LoginComponent,
        TopicsComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthenticatorsRoutingModule,
        SharedModule,
    ],
})
export class AuthenticatorsModule {}
