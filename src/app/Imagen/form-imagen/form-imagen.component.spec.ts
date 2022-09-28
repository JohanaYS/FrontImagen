import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImagenComponent } from './form-imagen.component';

describe('FormImagenComponent', () => {
  let component: FormImagenComponent;
  let fixture: ComponentFixture<FormImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
