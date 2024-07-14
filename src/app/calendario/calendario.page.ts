import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  hide = true;
  panelOpenState = false;
  dateForm: FormGroup;
  mostrarMensajefecha: boolean = true;
  mostrarFechaGuardada: boolean = false;
  savedDate: Date | null = null;

  constructor(private fb: FormBuilder, private storageService: StorageService) {
    this.dateForm = this.fb.group({
      selectedDate: ['']
    });
  }

  ngOnInit() {
    this.loadLastSavedDate();
  }

  async loadLastSavedDate() {
    const lastSavedDate = await this.storageService.getSelectedDate();
    if (lastSavedDate) {
      const dateObj = new Date(lastSavedDate);
      this.dateForm.patchValue({ selectedDate: dateObj });
      this.savedDate = dateObj;
    }
  }

  async saveDate() {
    const selectedDate = this.dateForm.value.selectedDate;
    if (selectedDate) {
      await this.storageService.saveSelectedDate(new Date(selectedDate));
      this.savedDate = new Date(selectedDate);
    }
  }

  async deleteDate() {
    await this.storageService.deleteSelectedDate();
    this.dateForm.patchValue({ selectedDate: '' });
    this.savedDate = null;
    this.mostrarFechaGuardada = false;
  }

  async showSavedDateCard() {
    await this.loadLastSavedDate();
    if (this.savedDate) {
      this.mostrarFechaGuardada = true;
    }
  }

  mostrarMensaje(tipo: string) {
    this.ocultarMensajes();
    if (tipo === 'fecha') {
      this.mostrarMensajefecha = true;
    }
  }

  ocultarMensajes() {
    this.mostrarMensajefecha = false;
    this.mostrarFechaGuardada = false;
  }

}


