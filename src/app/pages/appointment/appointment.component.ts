import { AppointmentService } from './../../services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  credentials={
    patientname:'',
    doctorname:'',
    appointmentType:'',
    appointmentDate:'',
    conformation:'true'
  }
  
  msg='';

  today = new Date()
  
  constructor(private appointmentService:AppointmentService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  doSubmit(){

    if((this.credentials.patientname!='' && this.credentials.doctorname!='' && this.credentials.appointmentType!='' && this.credentials.appointmentDate!='')
    && (this.credentials.patientname!=null && this.credentials.doctorname!=null && this.credentials.appointmentType!=null && this.credentials.appointmentDate!=null))
    {
      console.log("We have to submit the form to server");
      this.appointmentService.doBookAppointment(this.credentials).subscribe(
        response=>{
          console.log(response);
          this.snackbar.open("Appointment Booked successfull","close")
          window. location. href='/about'
        },
        error=>{
          console.log(error);
          // console.log("exception occured")
        this.msg='bad credentials ';
        this.snackbar.open("Appointment failed","close")

        }
      )

    }
    else{
      console.log("fields are empty !!");
      this.snackbar.open("Appointment fields are Empty !!","close")
    }
  }

}
