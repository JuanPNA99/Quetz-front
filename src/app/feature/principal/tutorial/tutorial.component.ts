import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LinkModalComponent } from './link-modal/link-modal.component';
import { TutorialService } from 'src/app/core/services/tutorial/tutorial.service';
import { ThemeService } from 'src/app/core/services/theme/theme.service';

import Swal from 'sweetalert2';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
    formTutorial!: FormGroup;
    formSteps!: FormArray;
    imgUrl!: any;
    safeUrl!: string;
    themeData!: any[];

    @ViewChild('successTutorial')
    readonly successTutorial!: SwalComponent;

    constructor(
        private formBuilder: FormBuilder,
        private spinner: NgxSpinnerService,
        private sanitizer: DomSanitizer,
        private router: Router,
        private modalService: NgbModal,
        private tutorialService: TutorialService,
        private themeService: ThemeService,
        private usersService: UsersService
    ) {}

    ngOnInit() {
        this.showSpinner('sp-image');
        this.buildFormTutorial();
        this.getThemes();
    }

    async triggerSwalComponent() {
        this.successTutorial.fire();
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

    buildFormTutorial(): void {
        this.formTutorial = this.formBuilder.group({
            titulo: ['', [Validators.required]],
            banner: [null, [Validators.required]],
            descripcion: ['', [Validators.required]],
            nivel: ['', [Validators.required]],
            sensible: [false],
            temas_tutorial: ['', [Validators.required]],
            paso_Tutorial: this.formBuilder.array([this.createStep(1)]),
        });
    }

    get stepsArray(): FormArray {
        return this.formTutorial.get('paso_Tutorial') as FormArray;
    }

    createStep(stepNumber: number): FormGroup {
        return this.formBuilder.group({
            numero_paso: [stepNumber, [Validators.required]],
            descripcion: ['', [Validators.required]],
            imagen: [null],
            adjunto: [null],
            imagenURL: [''],
        });
    }

    showSpinner(name: string): void {
        this.spinner.show(name);
    }

    hideSpinner(name: string): void {
        this.spinner.hide(name);
    }

    preview(file: any): void {
        if (file.length === 0) return;
        const mimeType = file[0].type;
        if (mimeType.match(/image\/*/) === null) {
            // this.isImageInvalid = true;
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (_event) => {
            this.imgUrl = reader.result;
        };
        this.formTutorial.patchValue({
            banner: file[0],
        });
    }

    addStepImage(event: any, step: number): void {
        if (event.target.files.length === 0) return;
        const mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) === null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.stepsArray.at(step).patchValue({
                imagenURL: reader.result,
            });
        };
        this.stepsArray.at(step).patchValue({
            imagen: event.target.files[0],
        });
    }

    addYoutubeLink(step: any): void {
        const modalRef = this.modalService.open(LinkModalComponent, {
            centered: true,
        });
        modalRef.componentInstance.step = step + 1;
        modalRef.componentInstance.url.subscribe(
            (urlString: string) => {
                this.stepsArray.at(step).patchValue({
                    adjunto:
                        this.sanitizer.bypassSecurityTrustResourceUrl(
                            urlString
                        ),
                });
            },
            (error: any) => console.log(error)
        );
    }

    addStep(step: any): void {
        this.formSteps = this.formTutorial.get('paso_Tutorial') as FormArray;
        this.formSteps.push(this.createStep(step + 2));
    }

    removeStep(step: any): void {
        this.formSteps = this.formTutorial.get('paso_Tutorial') as FormArray;
        this.formSteps.removeAt(step);
    }

    createTutorial(): void {
        this.showSpinner('sp-create');
        setTimeout(() => {
            this.hideSpinner('sp-create');
            this.triggerSwalComponent();
            setTimeout(() => {
                this.router.navigate(['/']);
            }, 3000);
        }, 1200);
        console.log(this.formTutorial.value);
    }

    imageLoaded(event: any): void {
        this.hideSpinner('sp-image');
    }

    postTutorial() {
        const formData = new FormData();
        Object.keys(this.formTutorial.value).forEach((key) => {
            let value = this.formTutorial.get(key)?.value;

            if (key === 'paso_Tutorial') {
                value = this.stepsArray.value as Array<any>;
                value.forEach((step: any, i: number) => {
                    delete step.imagenURL;
                    Object.keys(step).forEach((key) => {
                        if (step[key])
                            formData.append(
                                `paso_Tutorial[${i}]${key}`,
                                step[key]
                            );
                    });
                });
            } else formData.append(key, value);
        });
        // formData.forEach((value) => {
        //     console.log(value);
        // });
        this.tutorialService.postTutorial(formData).subscribe(
            (data) => {
                Swal.fire({
                    title: 'Tutorial realizado con exito',
                    icon: 'success',
                });
                setTimeout(() => {
                    this.router.navigate(['/home']);
                }, 3000);
            },
            (error) => {
                Swal.fire({
                    title: 'Hubo un problema',
                    icon: 'error',
                });
                setTimeout(() => {
                    this.router.navigate(['/home']);
                }, 3000);
            }
        );
    }
}
