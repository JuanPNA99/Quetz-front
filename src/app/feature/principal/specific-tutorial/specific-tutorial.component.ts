import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TutorialService } from 'src/app/core/services/tutorial/tutorial.service';

@Component({
    selector: 'app-specific-tutorial',
    templateUrl: './specific-tutorial.component.html',
    styleUrls: ['./specific-tutorial.component.scss'],
})
export class SpecificTutorialComponent implements OnInit {
    id!: number;
    tutorialData!: any;
    constructor(
        private tutorialService: TutorialService,
        private spinner: NgxSpinnerService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        // console.log(this.tutorialService.tutorialData);
        this.getRouteParams();
        this.showSpinner('sp-tutorial');
        this.getData();
    }

    getRouteParams(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
    }

    getTutorialData(): void {
        this.tutorialData = this.tutorialService.tutorialData[this.id];
        console.log(this.tutorialData);
    }

    showSpinner(name: string): void {
        this.spinner.show(name);
    }

    hideSpinner(name: string): void {
        this.spinner.hide(name);
    }

    loadImage(): void {
        this.hideSpinner('sp-tutorial');
    }

    getData(): void {
        this.tutorialService.getSpecificTutorial(this.id).subscribe(
            (res) => {
                this.tutorialData = res;
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
