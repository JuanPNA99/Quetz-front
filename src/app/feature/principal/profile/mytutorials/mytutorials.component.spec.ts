import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytutorialsComponent } from './mytutorials.component';

describe('MytutorialsComponent', () => {
  let component: MytutorialsComponent;
  let fixture: ComponentFixture<MytutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
