import { TestBed, async, inject } from '@angular/core/testing';

import { NoFamilyGuard } from './no-family.guard';

describe('NoFamilyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoFamilyGuard]
    });
  });

  it('should ...', inject([NoFamilyGuard], (guard: NoFamilyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
