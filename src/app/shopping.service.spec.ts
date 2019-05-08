import { TestBed, inject } from '@angular/core/testing';

import { ShopppingService } from './shoppping.service';

describe('ShopppingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopppingService]
    });
  });

  it('should be created', inject([ShopppingService], (service: ShopppingService) => {
    expect(service).toBeTruthy();
  }));
});
