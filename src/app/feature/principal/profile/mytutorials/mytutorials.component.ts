import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-mytutorials',
    templateUrl: './mytutorials.component.html',
    styleUrls: ['./mytutorials.component.scss'],
})
export class MytutorialsComponent implements OnInit {
    @Input() userData!: any;
    constructor() {}

    ngOnInit(): void {}
}
