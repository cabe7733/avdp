import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDocumentosComponent } from './proyectos-documentos.component';

describe('ProyectosDocumentosComponent', () => {
  let component: ProyectosDocumentosComponent;
  let fixture: ComponentFixture<ProyectosDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
