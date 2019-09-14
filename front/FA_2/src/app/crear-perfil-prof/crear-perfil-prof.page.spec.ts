import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPerfilProfPage } from './crear-perfil-prof.page';

describe('CrearPerfilProfPage', () => {
  let component: CrearPerfilProfPage;
  let fixture: ComponentFixture<CrearPerfilProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPerfilProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPerfilProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
