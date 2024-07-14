import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule si es necesario
import { StorageService } from '../services/storage.service'; // Asegúrate de importar tu servicio
import { IonicStorageModule } from '@ionic/storage-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController si es necesario

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let storageService: StorageService; // Declara el servicio que vas a utilizar
  let router: Router; // Declara el Router si es necesario
  let navCtrl: NavController; // Declara NavController si es necesario

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        IonicStorageModule.forRoot(),
        HttpClientTestingModule // Importa HttpClientTestingModule si es necesario
      ],
      providers: [
        StorageService, // Añade StorageService como proveedor
        NavController // Añade NavController si es necesario
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    storageService = TestBed.inject(StorageService); // Inyecta StorageService
    router = TestBed.inject(Router); // Inyecta Router si es necesario
    navCtrl = TestBed.inject(NavController); // Inyecta NavController si es necesario
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
