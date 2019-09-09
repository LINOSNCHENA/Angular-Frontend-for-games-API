import { TestBed } from '@angular/core/testing';

import { BettingsService } from './bettings.service';

describe('BettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BettingsService = TestBed.get(BettingsService);
    expect(service).toBeTruthy();
  });
});
