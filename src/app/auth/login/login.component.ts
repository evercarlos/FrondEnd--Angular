import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UsuarioService,
    private router: Router,
    ) { }

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required,  Validators.email]], //ever@gmail.com
    password: ['', Validators.required],
    remember: [false]
  });



  ngOnInit(): void {
  }

  login() {

    this.userService.login(this.loginForm.value)
    .subscribe(resp => {
      
      if(this.loginForm.get('remember')?.value) {
        localStorage.setItem('email', this.loginForm.get('email')?.value )
      } else {
        localStorage.removeItem('email');
      }
     this.router.navigateByUrl('/');

    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
    })
    // console.log(this.loginForm.value);
  }

}
