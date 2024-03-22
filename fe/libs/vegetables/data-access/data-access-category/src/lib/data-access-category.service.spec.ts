import { TestBed } from '@angular/core/testing';

import { DataAccessCategoryService } from './data-access-category.service';

describe('DataAccessCategoryService', () => {
  let service: DataAccessCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccessCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
