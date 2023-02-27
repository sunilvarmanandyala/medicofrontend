import { LoginDoctorService } from './../../services/login-doctor.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }
  msg='';

  constructor(private logindoctorService:LoginDoctorService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null ))
    {
      console.log("We have to submit the form to server")
      this.logindoctorService.generateToken(this.credentials).subscribe(
        (responce:any)=>{
          //success
         console.log(responce.token);
         this.logindoctorService.loginUser(responce.token)
         this.snackbar.open("Login successfull","close")
         window. location. href='/my-appointment'
        },
        error=>{
          //error
         console.log(error)
          // console.log("exception occured")
          this.msg='bad credentials incorrect username or password';
          this.snackbar.open("Login failed","close")
  
        }
      )

    }else{
      console.log("Fields are empty !!");
      this.snackbar.open("fields are empty","close")

    }
  }
}
