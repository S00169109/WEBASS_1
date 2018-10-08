import { TestBed } from '@angular/core/testing';

import { BikeDataService } from './bike-data.service';

describe('BikeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeDataService = TestBed.get(BikeDataService);
    expect(service).toBeTruthy();
  });
});
