import { TestBed } from '@angular/core/testing';

import { LigaDeportivaService } from './liga-deportiva.service';

describe('LigaDeportivaService', () => {
  let service: LigaDeportivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigaDeportivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
