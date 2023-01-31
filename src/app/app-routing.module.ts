import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/components/error-page/error-page.component';
import { HomeComponent } from './pages/components/home/home.component';
import { LoginComponent } from './pages/components/login/login.component';
import { RegisterComponent } from './pages/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages-routing.module').then(
        (comp) => comp.PagesRoutingModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin-routing.module').then(
        (comp) => comp.AdminRoutingModule
      ),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./staff/staff-routing.module').then(
        (comp) => comp.StaffRoutingModule
      ),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student-routing.module').then(
        (comp) => comp.StudentRoutingModule
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path:'enrollment',loadChildren:()=>import("./entrance/entrance-routing.module").then((comp)=>comp.EntranceRoutingModule)
  },
  {
    path:'error-page', component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
