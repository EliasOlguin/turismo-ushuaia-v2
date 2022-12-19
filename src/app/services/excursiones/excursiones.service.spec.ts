import { TestBed } from '@angular/core/testing';

import { ExcursionesService } from './excursiones.service';

describe('ExcursionesService', () => {
  let service: ExcursionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcursionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
