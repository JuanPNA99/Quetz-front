import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/core/services/tutorial/tutorial.service';

@Component({
    selector: 'app-specific-tutorial',
    templateUrl: './specific-tutorial.component.html',
    styleUrls: ['./specific-tutorial.component.scss'],
})
export class SpecificTutorialComponent implements OnInit {
    constructor(private tutorialService: TutorialService) {}

    ngOnInit() {
        console.log(this.tutorialService.tutorialData);
    }
}
