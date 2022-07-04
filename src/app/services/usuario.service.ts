import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';
import { Usuario } from '../models/user.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario?: Usuario;


  get token():string {
    return  localStorage.getItem('token') || '';
  }

  constructor(private http: HttpClient,
    private router: Router) { }


  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  get uid():string {
    console.log(this.usuario);
     return this.usuario?.uid || '';
  }
  //validarToken(){
  validarToken():Observable<boolean> {
    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': this.token,
      }
    }).pipe(
      map((resp:any) => {
        //this.usuario = resp.usuario; // resp.usuario no tiene la funcion imprimirUsuario()
        const { email, google, img='', nombre, role, uid } = resp.usuario;

        this.usuario = new Usuario(nombre, email, img,'', google, role, uid);

        this.usuario?.inprimirUsuario();
        localStorage.setItem('token', resp.token);
        return true;
      }),
      //map(resp=> true),
      catchError(error => of(false))// el observable retonra false
      /*catchError(error=> {
        console.log(error);
        return of(false);
      })*/
    )
  }

  

  createUer(formData: RegisterForm){
    // con return nos suscribimos
    return this.http.post(`${base_url}/usuarios`, formData)
    .pipe(
      tap((resp:any)=> {// REGRESA UN OBSERVABLE
        localStorage.setItem('token', resp.token);
      })
    )
  }

  actualizarPerfil(data: {email: string, nombre:string, role?:string}) {
    
    data = {
      ...data,
      role: this.usuario?.role,
    }

    return this.http.put(`${base_url}/usuarios/${this.uid}`, data, {
      headers: {
        'x-token': this.token,
      }
    });
  }
  
  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData)
    .pipe(
      tap((resp:any)=> {// REGRESA UN OBSERVABLE
        localStorage.setItem('token', resp.token);
      })
    )
  }
}
