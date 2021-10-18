import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticatorsComponent } from './authenticators.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticatorsRoutingModule } from './authenticators-routing.module';
import { TopicsComponent } from './register/topics/topics.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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
        SweetAlert2Module,
        NgxSpinnerModule,
    ],
})
export class AuthenticatorsModule {}
