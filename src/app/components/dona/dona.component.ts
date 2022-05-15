import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  
  @Input() title:string = 'Sin título';

  @Input('labels') public doughnutChartLabels: string[] = [ 'label1', 'label2', 'label3' ];
  @Input('data') public doughnutChartData: ChartData<'doughnut'> = {
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
