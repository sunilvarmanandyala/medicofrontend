import { AppointmentComponent } from './pages/appointment/appointment.component';
import { LoginService } from './services/login.service';
import { LoginDoctorService } from './services/login-doctor.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';

import { HomeComponent } from './pages/home/home.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {HttpClientModule}from'@angular/common/http';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginDoctorComponent } from './pages/login-doctor/login-doctor.component';
import { RegisterDoctorComponent } from './pages/register-doctor/register-doctor.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';
import {MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MyAppointmentComponent } from './pages/my-appointment/my-appointment.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { PatAppointmentComponent } from './pages/pat-appointment/pat-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    FacilitiesComponent,
    ContactComponent,
    LoginComponent,
    NavbarComponent,
    LoginDoctorComponent,
    RegisterDoctorComponent,
    PatientDetailComponent,
    AboutComponent,
    AppointmentComponent,
    FooterComponent,
    MyAppointmentComponent,
    PatAppointmentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
