import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public registerForm = this.fb.group({
    name: ['ever', Validators.required ],
    email: ['test1@gmail.com', Validators.required],
    password: ['123456', Validators.required],
    password2: ['123456', Validators.required],
    terms: [false, Validators.required],
  })

  ngOnInit(): void {
  }

  createUser() {
    console.log(this.registerForm.value);
  }

}
