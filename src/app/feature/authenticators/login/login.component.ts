import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    formLogin!: FormGroup;

    @ViewChild('errorLogin')
    errorLogin!: SwalComponent;
    constructor(
        private formBuilder: FormBuilder,
        private usersService: UsersService,
        private router: Router,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.initializeFormLogin();
    }

    async triggerSwalComponent() {
        this.errorLogin.fire();
    }

    initializeFormLogin(): void {
        this.formLogin = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(8)]],
            password: ['', [Validators.required]],
            checkButton: [''],
        });
    }

    login(data: any): void {
        this.spinner.show();
        delete data.checkButton;
        this.usersService.postLogin(data).subscribe(
            (res) => {
                this.spinner.hide();
                localStorage.setItem('token', res.access_token);
                this.router.navigate(['/home']);
            },
            (error) => {
                this.spinner.hide();
                this.triggerSwalComponent();
                console.log(error);
            }
        );
    }
}
