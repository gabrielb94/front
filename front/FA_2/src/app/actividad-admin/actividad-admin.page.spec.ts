import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadAdminPage } from './actividad-admin.page';

describe('ActividadAdminPage', () => {
  let component: ActividadAdminPage;
  let fixture: ComponentFixture<ActividadAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
