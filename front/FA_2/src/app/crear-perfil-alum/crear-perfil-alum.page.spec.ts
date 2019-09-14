import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPerfilAlumPage } from './crear-perfil-alum.page';

describe('CrearPerfilAlumPage', () => {
  let component: CrearPerfilAlumPage;
  let fixture: ComponentFixture<CrearPerfilAlumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPerfilAlumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPerfilAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
