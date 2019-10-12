import { TestBed } from '@angular/core/testing';

import { PickUpDateService } from './pick-up-date.service';

describe('PickUpDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PickUpDateService = TestBed.get(PickUpDateService);
    expect(service).toBeTruthy();
  });
});
