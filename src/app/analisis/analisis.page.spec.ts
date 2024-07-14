import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalisisPage } from './analisis.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@capacitor/camera';

describe('AnalisisPage', () => {
  let component: AnalisisPage;
  let fixture: ComponentFixture<AnalisisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisisPage],
      imports: [
        RouterTestingModule,
        CommonModule,
        IonicModule.forRoot(), // Asegúrate de usar IonicModule.forRoot() para las pruebas
      ],
      providers: [
        StorageService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ nombre: 'UsuarioPrueba' })
            }
          }
        },
        DomSanitizer // Agrega DomSanitizer como un proveedor
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AnalisisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
