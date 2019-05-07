/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SkiCalcServiceService } from './skicalc/ski-calc-service.service';

describe('SkiCalcServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkiCalcServiceService]
    });
  });

  it('should ...', inject([SkiCalcServiceService], (service: SkiCalcServiceService) => {
    expect(service).toBeTruthy();
  }));
});
