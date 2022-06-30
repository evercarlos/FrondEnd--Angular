import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';


import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
/*import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';*/
/*import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { RightsidebarComponent } from './shared/rightsidebar/rightsidebar.component';*/
/*import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages/pages.component';*/

@NgModule({
  declarations: [
    AppComponent,
    /**/
    NopagefoundComponent,
    /**/
    /**/
  ],
  imports: [ // todos los modulos van en import
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
