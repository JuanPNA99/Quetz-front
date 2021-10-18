import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
    @Input() timer: number = 2000;
    @Input() type!: string;

    showSnackbar: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    show(): void {
        this.showSnackbar = true;
        setTimeout(() => (this.showSnackbar = false), this.timer);
    }
}
