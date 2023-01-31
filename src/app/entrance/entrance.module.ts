import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntranceRoutingModule } from './entrance-routing.module';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { PagesModule } from '../pages/pages.module';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrationFormComponent, EnrollmentComponent],
  imports: [CommonModule, EntranceRoutingModule, PagesModule, RouterModule],
})
export class EntranceModule {}
