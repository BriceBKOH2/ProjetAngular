import { TestBed } from '@angular/core/testing';

import { NavBarDisplayService } from './navbar-display.service';

describe('NavbarDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavBarDisplayService = TestBed.get(NavBarDisplayService);
    expect(service).toBeTruthy();
  });
});
