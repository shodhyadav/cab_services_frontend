import { TestBed } from '@angular/core/testing';

import { CabServicesService } from './cab-services.service';

describe('CabServicesService', () => {
  let service: CabServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
