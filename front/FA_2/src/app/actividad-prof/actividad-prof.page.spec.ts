import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadProfPage } from './actividad-prof.page';

describe('ActividadProfPage', () => {
  let component: ActividadProfPage;
  let fixture: ComponentFixture<ActividadProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
