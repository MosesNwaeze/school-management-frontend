import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../pages/components/register/register.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentComponent,
    children: [
      {
        path: 'registration',
        component: RegistrationFormComponent,
      },
      {
        path: '',
        redirectTo: 'registration',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntranceRoutingModule {}
