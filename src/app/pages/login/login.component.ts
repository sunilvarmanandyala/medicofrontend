import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username:'',
    password:''
  }
  msg='';
  constructor(private LoginService:LoginService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log("form is submitted");
  if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null ))
  {
    console.log("We have to submit the form to server")
    // token generate
    this.LoginService.generateToken(this.credentials).subscribe(
      (responce:any)=>{
        //success
       console.log(responce.token);
       this.LoginService.loginUser(responce.token)
       this.snackbar.open("Login successfull","close")
       window. location. href='/appointment'
      
      },
      error=>{
        //error
        // console.log(error)
        console.log("exception occured")
        this.msg='bad credentials incorrect username or password';
        this.snackbar.open("Login failed","close")

      }
      
    )

  }

  else{
    console.log("Fields are empty !!")
    this.snackbar.open("fields are empty","close")
  }
  }

}
