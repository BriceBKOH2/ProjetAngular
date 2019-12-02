import { TestBed } from '@angular/core/testing';

import { CardInteractionService } from './card-interaction.service';

describe('CardInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardInteractionService = TestBed.get(CardInteractionService);
    expect(service).toBeTruthy();
  });
});
