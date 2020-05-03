import { TestBed } from '@angular/core/testing';

import { TranslateKeysService } from './translate-keys.service';

describe('TranslateKeysService', () => {
  let service: TranslateKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
