import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionPartidosComponent } from './programacion-partidos.component';

describe('ProgramacionPartidosComponent', () => {
  let component: ProgramacionPartidosComponent;
  let fixture: ComponentFixture<ProgramacionPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacionPartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
