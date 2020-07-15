import { TestBed } from '@angular/core/testing';

import { SalariesServiceService } from './salaries-service.service';

describe('SalariesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalariesServiceService = TestBed.get(SalariesServiceService);
    expect(service).toBeTruthy();
  });
});
