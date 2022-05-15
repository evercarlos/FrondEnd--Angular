import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labels1: string[] = [ 'label1', 'label2', 'label3' ];

  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 23, 11, 150 ] },
    ]
  };

  

  constructor() { }

  ngOnInit(): void {
  }

}
