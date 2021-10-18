import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/core/services/tutorial/tutorial.service';

@Component({
    selector: 'app-tutorial-card',
    templateUrl: './tutorial-card.component.html',
    styleUrls: ['./tutorial-card.component.scss'],
})
export class TutorialCardComponent implements OnInit {
    @Input() data!: any;

    constructor() {}

    ngOnInit() {}
}
