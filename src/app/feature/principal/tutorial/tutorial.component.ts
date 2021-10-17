import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
    formTutorial!: FormGroup;
    formSteps!: FormArray;
    imgUrl!: any;

    constructor(
        private formBuilder: FormBuilder,
        private spinner: NgxSpinnerService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        this.showSpinner('sp-image');
        this.buildFormTutorial();
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

    addStepImage(event: any, step: any): void {
        if (event.target.files.length === 0) return;
        const mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) === null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            step.image = reader.result;
        };
    }

    addYoutubeLink(url: string, step: any): void {
        step.link = this.sanitizer.bypassSecurityTrustUrl(url);
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
        }, 1200);
    }

    imageLoaded(event: any): void {
        this.hideSpinner('sp-image');
    }
}
