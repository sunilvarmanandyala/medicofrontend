import { RegisterDoctorService } from './../../services/register-doctor.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {

  credentials={
    username:'',
    password:'',
    doctorPhNo:'',
    specilization:'',
    experience:''
  }

  constructor(private registerdoctorService:RegisterDoctorService,private snackbar:MatSnackBar) { }


  ngOnInit(): void {
  }
  onSubmit(){
    if((this.credentials.username!='' && this.credentials.password!='' && this.credentials.doctorPhNo!='' && this.credentials.specilization!='' && this.credentials.experience!='')
    && (this.credentials.username!=null && this.credentials.password!=null && this.credentials.doctorPhNo!=null && this.credentials.specilization!=null && this.credentials.experience!=null))
    {
      console.log("We have to submit the form to server");
      this.registerdoctorService.doRegister(this.credentials).subscribe(
        response=>{
          console.log(response);
          this.snackbar.open("Registration successfull","close")
        },
        error=>{
          console.log(error);
          this.snackbar.open("Registration Failed","close")

        }
      )

    }else{
      console.log("fields are empty !!");
      this.snackbar.open("fields are empty","close")
    }
  }

}
