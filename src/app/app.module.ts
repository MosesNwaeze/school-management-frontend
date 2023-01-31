import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { StaffModule } from './staff/staff.module';
import { PagesModule } from './pages/pages.module';
import { EntranceModule } from './entrance/entrance.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    StudentModule,
    StaffModule,
    PagesModule,EntranceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
