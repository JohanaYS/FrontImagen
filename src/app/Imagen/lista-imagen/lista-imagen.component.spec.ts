import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaImagenComponent } from './lista-imagen.component';

describe('ListaImagenComponent', () => {
  let component: ListaImagenComponent;
  let fixture: ComponentFixture<ListaImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
