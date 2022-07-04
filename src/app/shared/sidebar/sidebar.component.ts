import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/user.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  public usuario?:Usuario;

  public menuItems: any[];

  constructor(private _sidebarService: SidebarService,
    private usuarioService: UsuarioService) { 
    this.menuItems = _sidebarService.menu;
    //this.imgUrl = usuarioService.usuario?.imageUrl;
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
  }

  logout() {
    this.usuarioService.logout();
  }

}
