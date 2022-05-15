import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


//MÓDULOS
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


/*import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';*/
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
/* import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';*/


const routes: Routes = [
  // path: '/dashboard' PageRouting
  // path: '/auth' AuthRouting
  // path: '/compras' ComprasRouting

 /*{
  path: '', 
  component: PagesComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'grafica1', component: Grafica1Component },
   { path: '',  redirectTo: 'dashboard', pathMatch: 'full' },
  ]
 },*/
 /***/
 { path: '**', component: NopagefoundComponent},// path no definido
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),// rutas padres
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}