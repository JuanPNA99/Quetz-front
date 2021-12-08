import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
    selector: 'app-mytutorials',
    templateUrl: './mytutorials.component.html',
    styleUrls: ['./mytutorials.component.scss'],
})
export class MytutorialsComponent implements OnInit {
    userData!: any;
    constructor(private usersService: UsersService) {}

    ngOnInit(): void {
        this.getData();
    }

    getData(): void {
        this.usersService.profile().subscribe(
            (res) => {
                this.userData = res;
                console.log(this.userData);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
