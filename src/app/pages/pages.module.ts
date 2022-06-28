import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';


import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { FormsModule } from '@angular/forms';
import { AccountSettinsComponent } from './account-settins/account-settins.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettinsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  // 
  exports: [// necesito usarlas fuera de otros modulos
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule, // para el router-outlet de pages.component.html funcione
    ComponentsModule,
  ]
})
export class PagesModule { }
