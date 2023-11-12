import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ScheduleComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
