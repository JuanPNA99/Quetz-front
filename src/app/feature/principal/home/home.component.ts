import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/core/services/tutorial/tutorial.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    tutorialsData!: any[];

    constructor(private tutorialService: TutorialService) {}

    ngOnInit(): void {
        this.getTutorials();
    }

    getTutorials(): void {
        this.tutorialService.getTutorials().subscribe(
            (res) => {
                this.tutorialsData = res;
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
