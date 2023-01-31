import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
