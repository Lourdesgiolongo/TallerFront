import { TestBed } from '@angular/core/testing';

import { CompetenciasService } from './competencias.service';

describe('CompetenciaServiceService', () => {
  let service: CompetenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

