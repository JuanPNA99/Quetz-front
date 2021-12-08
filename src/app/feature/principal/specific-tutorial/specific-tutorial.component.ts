import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {
    FormArray,
    FormBuilder,
    FormGroup,
    RequiredValidator,
    Validators,
} from '@angular/forms';
import { TutorialService } from 'src/app/core/services/tutorial/tutorial.service';
import { UsersService } from 'src/app/core/services/users/users.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-specific-tutorial',
    templateUrl: './specific-tutorial.component.html',
    styleUrls: ['./specific-tutorial.component.scss'],
})
export class SpecificTutorialComponent implements OnInit {
    id!: number;
    tutorialData!: any;
    userData!: any;
    formFollow!: FormGroup;
    following: boolean = false;
    formFeather!: FormGroup;
    variableEmplumado: boolean = false;

    constructor(
        private tutorialService: TutorialService,
        private usersService: UsersService,
        private spinner: NgxSpinnerService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        // console.log(this.tutorialService.tutorialData);
        this.getRouteParams();
        this.showSpinner('sp-tutorial');
        this.getPrimeInfo();
    }

    buildFormFollow(): void {
        this.formFollow = this.formBuilder.group({
            following_user_id: [
                this.tutorialData.autor.id,
                Validators.required,
            ],
        });
    }

    buildFormFeather(): void {
        this.formFeather = this.formBuilder.group({
            tutorial: [this.tutorialData.id, Validators.required],
        });
    }

    getRouteParams(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
    }

    followingFunction(): void {
        let reallyfollowing!: any;
        reallyfollowing = this.userData.following.find(
            (element: any) =>
                element.following_user_id.id === this.tutorialData.autor.id
        );
        if (reallyfollowing) {
            this.following = true;
        }
    }

    yaEmplumado() {
        let reallyEmplumado!: any;
        reallyEmplumado = this.tutorialData.plumas_tutoriales.find(
            (element: any) => element === this.userData.id
        );
        if (reallyEmplumado) {
            this.variableEmplumado = true;
        } else {
            this.variableEmplumado = false;
        }
    }

    getPrimeInfo() {
        if (!!localStorage.getItem('token')) {
            forkJoin([
                this.usersService.profile(),
                this.tutorialService.getSpecificTutorial(this.id),
            ]).subscribe(
                (res) => {
                    this.userData = res[0];
                    this.tutorialData = res[1];
                    this.buildFormFollow();
                    this.buildFormFeather();
                    this.followingFunction();
                    this.yaEmplumado();
                },
                (err) => {
                    console.log(err);
                }
            );
        } else {
            this.tutorialService.getSpecificTutorial(this.id).subscribe(
                (res) => {
                    this.tutorialData = res;
                },
                (err) => {
                    console.log(err);
                }
            );
        }
    }

    compare(a: any, b: any) {
        if (a == b) {
            return true;
        } else return false;
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

    getAuth(): boolean {
        return !!localStorage.getItem('token');
    }

    followUser(): void {
        this.usersService.postFollow(this.formFollow.value).subscribe(
            (res) => {
                console.log(res);
                this.getPrimeInfo();
            },
            (err) => {
                console.log(err);
            }
        );
    }

    emplumar(): void {
        this.tutorialService.emplumar(this.formFeather.value).subscribe(
            (res) => {
                console.log();
                this.getPrimeInfo();
            },
            (err) => {
                console.log(err);
            }
        );
    }

    desplumar(): void {
        this.tutorialService.desplumar(this.formFeather.value).subscribe(
            (res) => {
                console.log();
                this.getPrimeInfo();
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
