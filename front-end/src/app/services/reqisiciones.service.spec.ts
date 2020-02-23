import { TestBed } from '@angular/core/testing';

import { ReqisicionesService } from './reqisiciones.service';

describe('ReqisicionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqisicionesService = TestBed.get(ReqisicionesService);
    expect(service).toBeTruthy();
  });
});
