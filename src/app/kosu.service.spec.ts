import { TestBed } from '@angular/core/testing';

import { KosuService } from './kosu.service';

describe('KosuService', () => {
  let service: KosuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KosuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
