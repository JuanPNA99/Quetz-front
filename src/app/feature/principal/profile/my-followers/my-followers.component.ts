import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-my-followers',
    templateUrl: './my-followers.component.html',
    styleUrls: ['./my-followers.component.scss'],
})
export class MyFollowersComponent implements OnInit {
    @Input() userData!: any;
    constructor() {}

    ngOnInit() {
        console.log(this.userData);
    }
}
