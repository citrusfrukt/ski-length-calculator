import { TestBed } from '@angular/core/testing';

import { SkicalculatorService } from './skicalculator.service';

describe('SkicalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkicalculatorService = TestBed.get(SkicalculatorService);
    expect(service).toBeTruthy();
  });
});
