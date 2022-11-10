import { TestBed } from '@angular/core/testing';

import { AgregarCarritongService } from './agregar-carritong.service';

describe('AgregarCarritongService', () => {
  let service: AgregarCarritongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarCarritongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});