import { TestBed } from '@angular/core/testing';

import { CheckScreenSizeServiceService } from './check-screen-size-service.service';

describe('CheckScreenSizeServiceService', () => {
  let service: CheckScreenSizeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckScreenSizeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
