import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDisplayNavbarComponent } from './btn-display-navbar.component';

describe('BtnDisplayNavbarComponent', () => {
  let component: BtnDisplayNavbarComponent;
  let fixture: ComponentFixture<BtnDisplayNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnDisplayNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDisplayNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
