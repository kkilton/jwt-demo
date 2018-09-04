import { TestBed, inject } from '@angular/core/testing';

import { UnsecureService } from './unsecure.service';

describe('UnsecureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsecureService]
    });
  });

  it('should be created', inject([UnsecureService], (service: UnsecureService) => {
    expect(service).toBeTruthy();
  }));
});
