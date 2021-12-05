import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/core/services/users/users.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    formRegister!: FormGroup;
    divRegister: boolean = true;
    display: boolean = false;

    @ViewChild('errorLogin')
    errorLogin!: SwalComponent;
    constructor(
        private formBuilder: FormBuilder,
        private usersService: UsersService,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.initializeFormRegister();
    }

    async triggerSwalComponent() {
        this.errorLogin.fire();
    }

    initializeFormRegister(): void {
        this.formRegister = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(8)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            password_confirmation: ['', [Validators.required]],
            fecha_nacimiento: ['', [Validators.required]],
        });
    }

    register(): void {
        this.spinner.show();
        this.usersService.postSignup(this.formRegister.value).subscribe(
            (res) => {
                this.spinner.hide();
                this.showTopics();
                localStorage.setItem('token', res.access_token);
            },
            (error) => {
                this.spinner.hide();
                // this.triggerSwalComponent();
                console.log(error);
                Swal.fire({
                    title: `Error ${error.status}`,
                    icon: 'error',
                    text: `${JSON.stringify(error.error)}`,
                });
            }
        );
    }

    showTopics() {
        this.divRegister = false;
        this.display = true;
    }
}
