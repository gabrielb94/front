import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancePerfilPage } from './balance-perfil.page';

describe('BalancePerfilPage', () => {
  let component: BalancePerfilPage;
  let fixture: ComponentFixture<BalancePerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancePerfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancePerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
