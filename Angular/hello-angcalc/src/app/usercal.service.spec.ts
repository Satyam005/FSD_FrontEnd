import { TestBed } from '@angular/core/testing';

import { UsercalService } from './usercal.service';

describe('UsercalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercalService = TestBed.get(UsercalService);
    expect(service).toBeTruthy();
  });
});
