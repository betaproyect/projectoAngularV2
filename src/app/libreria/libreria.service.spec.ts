import { TestBed } from '@angular/core/testing';

import { LibreriaServiceService } from './libreria.service';

describe('LibreriaServiceService', () => {
  let service: LibreriaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreriaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
