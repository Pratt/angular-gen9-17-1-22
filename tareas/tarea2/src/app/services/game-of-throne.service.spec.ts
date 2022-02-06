import { TestBed } from '@angular/core/testing';

import { GameOfThroneService } from './game-of-throne.service';

describe('GameOfThroneService', () => {
  let service: GameOfThroneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameOfThroneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
