import { LoginDoctorService } from './../../services/login-doctor.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.component.html',
  styleUrls: ['./my-appointment.component.css']
})
export class MyAppointmentComponent implements OnInit {

  constructor(private loginDoctorService:LoginDoctorService) { }
  username:any
  id:any
  credentials:any
  data:any=[]

  ngOnInit(): void {
    this.loginDoctorService.getUsername().subscribe(
      {
        next:(r:any)=>{
          this.username=r.username;
          this.loginDoctorService.getdoctorappointments(r.username).subscribe(
            {
              next:(r:any)=>{
                console.log(r);
                for(let i of r){
                  // if(i.patientId==this.id){
                  //   this.data.push(i)
                  //   console.log(this.data)
                  // }
                  this.data.push(i)
      
                }
                
              },
              error:(e)=>{
                console.log(e);
                
                // this._snackBar.open(e.error.errorMessage,"close");
              }
            }
          )
          console.log(this.username);
        },
        error:(e)=>{
          console.log(e)
        }
      }
    )
    // this.loginDoctorService.getdoctors().subscribe(
    //   {
    //     next:(r:any)=>{
    //       console.log(r);
    //       console.log(this.username);
    //       for(let i of r){
    //         if(i.username==this.username){
    //           this.id=i.doctor_Id;
    //           // this.credentials.username=i.username;
    //           // this.credentials.doctorPhNo=i.doctorPhNo;
    //           // this.credentials.password=i.password;
    //         }
    //       }
    //     },
    //     error:(e)=>{
    //       console.log(e)
    //     }
    //   }
    // )
    // this.loginDoctorService.getdoctorappointments(this.username).subscribe(
    //   {
    //     next:(r:any)=>{
    //       console.log(r);
    //       for(let i of r){
    //         // if(i.patientId==this.id){
    //         //   this.data.push(i)
    //         //   console.log(this.data)
    //         // }
    //         this.data.push(i)

    //       }
          
    //     },
    //     error:(e)=>{
    //       console.log(e);
          
    //       // this._snackBar.open(e.error.errorMessage,"close");
    //     }
    //   }
    // )
  }

}
