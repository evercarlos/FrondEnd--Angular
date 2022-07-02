import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];

  constructor(private _sidebarService: SidebarService,
    private usuarioService: UsuarioService) { 
    this.menuItems = _sidebarService.menu;
  }

  ngOnInit(): void {
  }

  logout() {
    this.usuarioService.logout();
  }

}
