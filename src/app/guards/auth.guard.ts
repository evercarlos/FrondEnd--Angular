import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      console.log('pasó por el canActivate del guard');

      return this.usuarioService.validarToken()
      .pipe(
        tap(isAutent => {
          if(!isAutent) {
            this.router.navigateByUrl('/login');
          }
        })
      )
      /*.subscribe((resp:any)=> {
        console.log(resp);
      })*/

    // return true;
  }
  
}
