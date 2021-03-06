/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinkModalComponent } from './link-modal.component';

describe('LinkModalComponent', () => {
  let component: LinkModalComponent;
  let fixture: ComponentFixture<LinkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
