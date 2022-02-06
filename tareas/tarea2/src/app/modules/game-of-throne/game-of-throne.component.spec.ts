import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfThroneComponent } from './game-of-throne.component';

describe('GameOfThroneComponent', () => {
  let component: GameOfThroneComponent;
  let fixture: ComponentFixture<GameOfThroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOfThroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOfThroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
