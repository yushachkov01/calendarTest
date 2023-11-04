import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {MatDialogModule} from "@angular/material/dialog";
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule} from "@angular/forms";
import { CalendarComponent } from './modal-window/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    MatDialogModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
