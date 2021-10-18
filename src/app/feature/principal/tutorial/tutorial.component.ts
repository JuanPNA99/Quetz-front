import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LinkModalComponent } from './link-modal/link-modal.component';

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

    @ViewChild('successTutorial')
    readonly successTutorial!: SwalComponent;

    constructor(
        private formBuilder: FormBuilder,
        private spinner: NgxSpinnerService,
        private sanitizer: DomSanitizer,
        private router: Router,
        private modalService: NgbModal
    ) {}

    ngOnInit() {
        this.showSpinner('sp-image');
        this.buildFormTutorial();
    }

    async triggerSwalComponent() {
        this.successTutorial.fire();
    }

    buildFormTutorial(): void {
        this.formTutorial = this.formBuilder.group({
            titulo: ['', [Validators.required]],
            banner: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
            nivel: ['', [Validators.required]],
            sensible: [false],
            steps: this.formBuilder.array([this.createStep(1)]),
        });
    }

    get stepsArray(): FormArray {
        return this.formTutorial.get('steps') as FormArray;
    }

    createStep(stepNumber: number): FormGroup {
        return this.formBuilder.group({
            numero_paso: [stepNumber, [Validators.required]],
            descripcion: ['', [Validators.required]],
            imagen: [''],
            adjunto: [''],
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
                imagen: reader.result,
            });
        };
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
        this.formSteps = this.formTutorial.get('steps') as FormArray;
        this.formSteps.push(this.createStep(step + 2));
    }

    removeStep(step: any): void {
        this.formSteps = this.formTutorial.get('steps') as FormArray;
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
    }

    imageLoaded(event: any): void {
        this.hideSpinner('sp-image');
    }
}
