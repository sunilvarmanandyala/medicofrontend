import { MyAppointmentComponent } from './pages/my-appointment/my-appointment.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';

import { RegisterComponent } from './pages/register/register.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginDoctorComponent } from './pages/login-doctor/login-doctor.component';
import { RegisterDoctorComponent } from './pages/register-doctor/register-doctor.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'facilities',component:FacilitiesComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login-doctor',component:LoginDoctorComponent},
  {path:'register-doctor',component:RegisterDoctorComponent},
  {path:'patient-detail',component:PatientDetailComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'about',component:AboutComponent},
 {path:'my-appointment',component:MyAppointmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
