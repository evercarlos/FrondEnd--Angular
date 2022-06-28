import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.getUsuario();
     this.getUsuario().then(resp => {
       console.log(resp);
     })
    /*const promesa = new Promise((resolve) => {
       
       resolve('Hola Mundo');
    });

    promesa.then(response => {
      console.log(response);
    });
    console.log('Find del Init');*/
  }

  getUsuario() {

    const promesa = new Promise(reseolve => {

      fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(body => reseolve(body.data));
    })
    return promesa;
  }

}
