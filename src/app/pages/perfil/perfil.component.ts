import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/user.model';

import { FileUploadService } from 'src/app/services/file-upload.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

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
  public imagenSubir!: File;
  public imgTemp:any = null;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private fileUploadService: FileUploadService,
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
      Swal.fire('Guardado', 'Cambios fueron guardados', 'success');
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
    })
  }

  cambiarImagem(event:any){
    this.imagenSubir = event.target.files[0];
    
    if(!event.target.files[0]){
       this.imgTemp = null;
       return;
    } // si pasa ejecuta lo siguiente

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onloadend = () => {
      this.imgTemp = reader.result;//result: es el base64
      //console.log(reader.result);
    }

  }

  subirImagen() {
    this.fileUploadService.actualizarFoto(this.imagenSubir, 'usuarios', this.usuario?.uid||'')
    .then(img=>{
      Swal.fire('Guardado', 'Imagen actualizado correctamente', 'success');
      this.usuario!.img= img 
    }, err => {
      Swal.fire('Error', err.error.msg, 'error'); 
    });
  }

}
