import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

// llamando a custon.js qu fue definido de menera global, para evitar error de styles al destruir componente (logout)
declare function customInitFunctions():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  constructor(private _settionsService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}