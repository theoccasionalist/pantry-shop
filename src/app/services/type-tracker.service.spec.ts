import { TestBed } from '@angular/core/testing';
import { TypeTrackerService } from './type-tracker.service';

describe('TypeTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeTrackerService = TestBed.get(TypeTrackerService);
    expect(service).toBeTruthy();
  });
});
