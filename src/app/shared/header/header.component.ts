import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/user.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  //public imgUrl? = '';
  public usuario?:Usuario;


  constructor(private usuarioService: UsuarioService,) {
    // this.imgUrl = usuarioService.usuario?.imageUrl;
    this.usuario = usuarioService.usuario;// aqui si, usuario es una instancia
   }

  ngOnInit(): void {
  }

  logout() {
    this.usuarioService.logout();
  }

}
