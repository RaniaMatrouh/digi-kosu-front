import { TestBed } from '@angular/core/testing';

import { KosuServiceService } from './kosu-service.service';

describe('KosuServiceService', () => {
  let service: KosuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KosuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
