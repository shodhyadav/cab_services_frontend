import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  admins=[
    {
      username :'',
      password:'',
      firstName:'',
      lastName:'',
      email:'',
      phone:''
    }
   ];

  constructor(private admin:AdminServiceService) { }

  ngOnInit(): void {

    this.admin.getAllAdmin().subscribe(
      (data:any)=>{
        this.admins=data;
      },
      (error)=>{
        console.log("error");
        
      }
    );
  }

}
