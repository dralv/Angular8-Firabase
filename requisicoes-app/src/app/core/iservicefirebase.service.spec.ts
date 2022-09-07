import { TestBed } from '@angular/core/testing';

import { IservicefirebaseService } from './iservicefirebase.service';

describe('IservicefirebaseService', () => {
  let service: IservicefirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IservicefirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
