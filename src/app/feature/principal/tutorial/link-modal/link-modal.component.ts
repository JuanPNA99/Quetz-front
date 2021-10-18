import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-link-modal',
    templateUrl: './link-modal.component.html',
    styleUrls: ['./link-modal.component.scss'],
})
export class LinkModalComponent implements OnInit {
    @Input() step!: number;
    @Output() url: EventEmitter<string> = new EventEmitter<string>();
    urlString!: string;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit() {}

    addUrl(): void {
        this.url.emit(this.urlString);
        this.activeModal.close();
    }
}
