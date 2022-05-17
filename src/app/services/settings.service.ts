import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', theme);
  }

  changeTheme(theme:string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const  link = document.querySelectorAll('.selector');

    link.forEach((row:any) => {
       row.classList.remove('working');
       const btnTheme = row.getAttribute('data-theme');
       const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
       const currentTheme = this.linkTheme?.getAttribute('href');
       if(btnThemeUrl === currentTheme) {
         row.classList.add('working');
       }
    });
  }
}
