import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
    isAuthenticated!: boolean;
    constructor(
        private userService: UsersService,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.authenticatedConfirm();
    }
    authenticatedConfirm(): void {
        this.isAuthenticated = this.userService.isAuthenticated();
    }

    logout(): void {
        this.spinner.show();
        this.userService.logout().subscribe(
            (res) => {
                this.spinner.hide();
                this.isAuthenticated = false;
                localStorage.clear();
            },
            (err) => {
                this.spinner.hide();
                this.isAuthenticated = false;
                localStorage.clear();
            }
        );
    }
}
