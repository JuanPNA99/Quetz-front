import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
    selector: 'app-notifications-card',
    templateUrl: './notifications-card.component.html',
    styleUrls: ['./notifications-card.component.scss'],
})
export class NotificationsCardComponent implements OnInit {
    notificationsData!: any;
    constructor(private usersService: UsersService) {}

    ngOnInit(): void {
        this.getNotifications();
    }
    getNotifications(): void {
        this.usersService.getNotifications().subscribe(
            (res) => {
                this.notificationsData = res;
                console.log(this.notificationsData);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
