import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
    formTutorial!: FormGroup;
    imgUrl!: any;
    isImageInvalid!: boolean;
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.buildFormTutorial();
    }

    buildFormTutorial(): void {
        this.formTutorial = this.formBuilder.group({
            titulo: ['', [Validators.required]],
            banner: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
            nivel: ['', [Validators.required]],
            sensible: [false],
        });
    }

    preview(file: any): void {
        if (file.length === 0) return;
        const mimeType = file[0].type;
        if (mimeType.match(/image\/*/) === null) {
            this.isImageInvalid = true;
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (_event) => {
            this.imgUrl = reader.result;
        };
    }
}
