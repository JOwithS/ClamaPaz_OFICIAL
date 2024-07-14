import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

describe('StorageService', () => {
  let service: StorageService;
  let storage: Storage;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot()  
      ],
      providers: [
        StorageService,
        Storage,
        ToastController
      ]
    });

    // Inicializa el almacenamiento
    storage = TestBed.inject(Storage);
    await storage.create();

    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
