import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-my-information',
    templateUrl: './my-information.component.html',
    styleUrls: ['./my-information.component.scss'],
})
export class MyInformationComponent implements OnInit {
    @Input() userData!: any;
    infoMod: boolean = false;
    formUser!: FormGroup;
    constructor(
        private usersService: UsersService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {}

    ngOnInit() {
        this.buildFormUser();
    }

    buildFormUser(): void {
        this.formUser = this.formBuilder.group({
            institucion_educativa: [this.userData.institucion_educativa],
            idiomas: [this.userData.idiomas],
            ubicacion: [this.userData.ubicacion],
            facebookurl: [this.userData.facebookurl],
            twitterurl: [this.userData.twitterurl],
            youtubeurl: [this.userData.youtubeurl],
            instagramurl: [this.userData.instagramurl],
        });
    }

    modify() {
        this.infoMod = true;
    }

    cancelModify() {
        this.infoMod = false;
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

    userUpdate(data: any) {
        this.usersService.profileUpdate(data).subscribe(
            (data) => {
                console.log(data);
                Swal.fire({
                    title: 'Perfil Actualizado correctamente',
                    icon: 'success',
                });
                this.getData();
                this.infoMod = false;
            },
            (err) => {
                console.log(err);
                Swal.fire({
                    title: 'Hubo un problema',
                    icon: 'error',
                });
                this.getData();
                this.infoMod = false;
            }
        );
    }
}
