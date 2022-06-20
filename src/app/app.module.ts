import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      ErrorComponent,
      ReservationComponent],
      imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    