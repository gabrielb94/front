import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadAlumPage } from './actividad-alum.page';

describe('ActividadAlumPage', () => {
  let component: ActividadAlumPage;
  let fixture: ComponentFixture<ActividadAlumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadAlumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
