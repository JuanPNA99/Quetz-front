import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    currentView: number = 0;
    formUser!: FormGroup;
    imgUrl!: any;
    userData!: any;
    constructor(
        private formBuilder: FormBuilder,
        private spinner: NgxSpinnerService,
        private usersService: UsersService
    ) {}

    ngOnInit(): void {
        this.buildFormUser();
        this.getData();
    }

    activateRoute(view: number): void {
        this.currentView = view;
    }

    buildFormUser(): void {
        this.formUser = this.formBuilder.group({
            email: [''],
            institucion_educativa: [''],
            idiomas: [''],
            ubicacion: [''],
            facebookurl: [''],
            twitterurl: [''],
            youtubeurl: [''],
            instagramurl: [''],
            foto_perfil: [null],
        });
    }

    getData(): void {
        this.usersService.profile().subscribe(
            (res) => {
                this.userData = res;
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    showSpinner(name: string): void {
        this.spinner.show(name);
    }

    hideSpinner(name: string): void {
        this.spinner.hide(name);
    }

    loadImage(): void {
        this.hideSpinner('sp-tutorial');
    }

    imageLoaded(event: any): void {
        this.hideSpinner('sp-image');
    }

    preview(file: any): void {
        if (file.length === 0) return;
        const mimeType = file[0].type;
        if (mimeType.match(/image\/*/) === null) {
            // this.isImageInvalid = true;
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (_event) => {
            this.imgUrl = reader.result;
        };
        this.formUser.patchValue({
            foto_perfil: file[0],
        });
    }

    userUpdate() {
        const formData = new FormData();
        Object.keys(this.formUser.value).forEach((key) => {
            let value = this.formUser.get(key)?.value;
            formData.append(key, value);
        });
        this.usersService.profileUpdate(formData).subscribe((data) => {
            console.log(data);
        });
    }
}
