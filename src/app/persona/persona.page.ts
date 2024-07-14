import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {
  hide = true;
  username: string = "";
  password: string = "";

  constructor() {}

  ngOnInit() {

  }
}