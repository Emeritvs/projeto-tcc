import { TestBed } from '@angular/core/testing';

import { PagesRenderService } from './pages-render.service';

describe('PagesRenderService', () => {
  let service: PagesRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
