import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlumPage } from './home-alum.page';

describe('HomeAlumPage', () => {
  let component: HomeAlumPage;
  let fixture: ComponentFixture<HomeAlumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAlumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
