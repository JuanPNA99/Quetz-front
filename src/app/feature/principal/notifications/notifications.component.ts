import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
    notificationsData!: any;
    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.getNotifications();
    }

    getNotifications(): void {
        this.usersService.getNotifications().subscribe(
            (res) => {
                this.notificationsData = res;
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
