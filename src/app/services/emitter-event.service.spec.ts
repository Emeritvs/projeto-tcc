import { TestBed } from '@angular/core/testing';

import { EmitterEventService } from './emitter-event.service';

describe('EmitterEventService', () => {
  let service: EmitterEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitterEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
