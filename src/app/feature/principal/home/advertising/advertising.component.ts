import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme/theme.service';

@Component({
    selector: 'app-advertising',
    templateUrl: './advertising.component.html',
    styleUrls: ['./advertising.component.scss'],
})
export class AdvertisingComponent implements OnInit {
    themeData!: any[];

    constructor(private themeService: ThemeService) {}

    ngOnInit(): void {
        this.getThemes();
    }

    getThemes(): void {
        this.themeService.getThemes().subscribe(
            (res) => {
                this.themeData = res;
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
