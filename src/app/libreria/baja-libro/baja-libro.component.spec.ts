import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaLibroComponent } from './baja-libro.component';

describe('BajaLibroComponent', () => {
  let component: BajaLibroComponent;
  let fixture: ComponentFixture<BajaLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
