import { TestBed } from '@angular/core/testing';

import { ImplicitAutenticationService } from './implicit-autentication.service';

describe('ImplicitAutenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImplicitAutenticationService = TestBed.get(ImplicitAutenticationService);
    expect(service).toBeTruthy();
  });
});
