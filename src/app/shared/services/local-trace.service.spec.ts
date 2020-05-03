import { TestBed } from '@angular/core/testing';

import { LocalTraceService } from './local-trace.service';

describe('LocalTraceService', () => {
  let service: LocalTraceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalTraceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
