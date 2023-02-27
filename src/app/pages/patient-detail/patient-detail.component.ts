import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  credentials = {
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
//     this.login.getEmail().subscribe(
//       {
//         next:(r:any)=>{
//           this.patEmail=r.email;
//           console.log(this.patEmail);
//         },
//         error:(e)=>{
//           console.log(e)
//         }
//       }
//     )
//     this.login.getPatients().subscribe(
//       {
//         next:(r:any)=>{
//           console.log(r);
//           for(let i of r){
//             if(i.email==this.patEmail){
//               this.id=i.patId;
//               this.data.patName=i.patName;
// this.data.email=i.email;
//               this.data.password=i.password;

//             }
//           }

//         },
//         error:(e)=>{
//           console.log(e)
//         }
//       }
//     )
  }
  doSubmit(){

  }

}
