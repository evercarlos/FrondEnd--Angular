import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/user.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  public perfilForm=this.fb.group(
    {
      nombre:[this.usuario?.nombre, Validators.required],
      email:[this.usuario?.email, [Validators.required, Validators.email]],
    }
  );
  public usuario?: Usuario;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
  ) { 
    this.usuario = this.usuarioService.usuario;
  }
  
  
  ngOnInit(): void {
     this.perfilForm = this.fb.group(
      {
        nombre:[this.usuario?.nombre, Validators.required],
        email:[this.usuario?.email, [Validators.required, Validators.email]],
      }
    )
  }

  actualizarPerfil(){
    this.usuarioService.actualizarPerfil(this.perfilForm?.value)
    .subscribe(resp=> {
      const {nombre, email } = this.perfilForm.value;
      this.usuario!.nombre = nombre; //  porque usamos el mismo nombre se actualiza automaticamente en todos
      this.usuario!.email = email;
    })
  }

}
