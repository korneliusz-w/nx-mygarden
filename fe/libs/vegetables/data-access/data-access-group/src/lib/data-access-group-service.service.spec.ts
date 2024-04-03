import { TestBed } from '@angular/core/testing';

import { DataAccessGroupServiceService } from './data-access-group-service.service';

describe('DataAccessGroupServiceService', () => {
  let service: DataAccessGroupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccessGroupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
