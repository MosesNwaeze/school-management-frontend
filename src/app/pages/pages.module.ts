import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    WrapperComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, RouterModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
  ],
})
export class PagesModule {}
