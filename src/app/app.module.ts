import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticatorsModule } from './feature/authenticators/authenticators.module';
import { HttpInterceptorProviders } from './core/interceptor/http-interceptors';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuthenticatorsModule,
        BrowserAnimationsModule,
        NgxSpinnerModule,
        SweetAlert2Module.forRoot(),
    ],
    providers: [HttpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
