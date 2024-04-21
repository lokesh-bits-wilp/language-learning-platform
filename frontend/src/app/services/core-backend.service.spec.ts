import { TestBed } from '@angular/core/testing';

import { CoreBackendService } from './core-backend.service';

describe('CoreBackendService', () => {
  let service: CoreBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
