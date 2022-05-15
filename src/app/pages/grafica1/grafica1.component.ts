import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  /* public colors:Color[] = [
    {backgroundColor: ['#9E120E', '#FF5800', '#FFB414'] }
  ];*/


  constructor() { }

  ngOnInit(): void {
  }

}
