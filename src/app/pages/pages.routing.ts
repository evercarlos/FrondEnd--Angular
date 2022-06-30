import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettinsComponent } from './account-settins/account-settins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard', 
    component: PagesComponent,
    children: [
        { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
        { path: 'progress', component: ProgressComponent , data: {titulo: 'Progress'} },
        { path: 'grafica1', component: Grafica1Component, data: {titulo: 'Gráfico'}  },
        { path: 'account-settings', component: AccountSettinsComponent, data: {titulo: 'Ajustes'}  },
        {path: 'promesas', component: PromesasComponent , data: {titulo: 'Promesas'} },
        {path: 'rxjs', component: RxjsComponent , data: {titulo: 'Rxjs'} },
        //{ path: '',  redirectTo: 'dashboard', pathMatch: 'full' },

        // Seguiridad
        { path: '', component: DashboardComponent, data: {titulo: 'Seguridad'} },
        { path: 'profile', component: ProgressComponent , data: {titulo: 'Perfil'} },
        { path: 'type_resource', component: ProgressComponent , data: {titulo: 'Tipo Recurso'} },
        { path: 'service', component: ProgressComponent , data: {titulo: 'Servicio'} },
        { path: 'contract', component: ProgressComponent , data: {titulo: 'Contrato'} },
        { path: 'user', component: ProgressComponent , data: {titulo: 'Usuario'} },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule{}