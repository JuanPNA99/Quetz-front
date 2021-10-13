import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchThemeComponent } from './search-theme.component';

describe('SearchThemeComponent', () => {
  let component: SearchThemeComponent;
  let fixture: ComponentFixture<SearchThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
