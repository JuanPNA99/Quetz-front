import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
    selector: 'app-my-information',
    templateUrl: './my-information.component.html',
    styleUrls: ['./my-information.component.scss'],
})
export class MyInformationComponent implements OnInit {
    @Input() userData!: any;
    infoMod: boolean = false;
    constructor(private usersService: UsersService) {}

    ngOnInit() {
        console.log(this.infoMod);
    }

    modify() {
        this.infoMod = true;
    }

    cancelModify() {
        this.infoMod = false;
    }
}
