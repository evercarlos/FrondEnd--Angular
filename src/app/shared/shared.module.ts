import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    RightsidebarComponent,
  ],
  exports: [ // necesito usarlas fuera de otros modulos
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    RightsidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
