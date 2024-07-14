import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './localstorage.service';
import { IonicStorageModule,  Storage  } from '@ionic/storage-angular';

describe('LocalstorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot(),
      ],
      providers: [
        LocalStorageService,
        {
          provide: Storage,
          useFactory: () => localStorage, 
        }
      ],
    });
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
