import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
    isAuthenticated!: boolean;
    tokenIsClear!: boolean;
    constructor(
        private userService: UsersService,
        private spinner: NgxSpinnerService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.authenticatedConfirm();
        this.tokenIsClear = false;
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
                this.tokenIsClear = true;
                this.router.navigate(['/home']);
            },
            (err) => {
                this.spinner.hide();
                this.isAuthenticated = false;
                localStorage.clear();
                this.router.navigate(['/home']);
            }
        );
    }
}
