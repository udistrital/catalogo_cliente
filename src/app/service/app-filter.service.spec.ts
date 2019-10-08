import { TestBed } from '@angular/core/testing';

import { AppFilterService } from './app-filter.service';

describe('AppFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppFilterService = TestBed.get(AppFilterService);
    expect(service).toBeTruthy();
  });
});
