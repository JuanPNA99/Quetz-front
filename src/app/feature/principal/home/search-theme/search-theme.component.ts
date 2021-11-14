import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TutorialService } from 'src/app/core/services/tutorial/tutorial.service';

@Component({
    selector: 'app-search-theme',
    templateUrl: './search-theme.component.html',
    styleUrls: ['./search-theme.component.scss'],
})
export class SearchThemeComponent implements OnInit {
    searchInput!: string;
    @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();
    constructor(private tutorialService: TutorialService) {}

    ngOnInit(): void {}

    searchTheme(): void {
        const params = {
            search: this.searchInput,
        };
        this.tutorialService.getTutorialByFilters(params).subscribe(
            (res) => {
                this.searchEvent.emit(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
