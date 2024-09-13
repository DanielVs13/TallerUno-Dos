import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSuscriptorComponent } from './formulario-suscriptor.component';

describe('FormularioSuscriptorComponent', () => {
  let component: FormularioSuscriptorComponent;
  let fixture: ComponentFixture<FormularioSuscriptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSuscriptorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioSuscriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
