import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPerfilAdminPage } from './crear-perfil-admin.page';

describe('CrearPerfilAdminPage', () => {
  let component: CrearPerfilAdminPage;
  let fixture: ComponentFixture<CrearPerfilAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPerfilAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPerfilAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
