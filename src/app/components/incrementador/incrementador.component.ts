import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progress: number = 50;
  @Input() btnClass:string= 'btn-primary';


  @Output() valorSalida = new EventEmitter<number>();

  /* get getPorcentage() {
    return `${this.progress}%`
  } */

  cambiarValor(valor:number) {
    if (this.progress >= 100 && valor>= 0) {
      this.valorSalida.emit(100);
      this.progress = 100;
    }
    if (this.progress <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progress = 0;
    }
    this.progress = this.progress +  valor;
    this.valorSalida.emit(this.progress);

  }

  onChange(newValue:number) {
    if(newValue >= 100) {
      this.progress = 100;
    } else if(newValue <= 0){
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.valorSalida.emit(this.progress);
  }

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

}
