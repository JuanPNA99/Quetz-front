import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatorsComponent } from './authenticators.component';

describe('AuthenticatorsComponent', () => {
  let component: AuthenticatorsComponent;
  let fixture: ComponentFixture<AuthenticatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
