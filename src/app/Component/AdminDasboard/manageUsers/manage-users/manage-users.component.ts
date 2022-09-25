import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import baseUrl from 'src/app/Services/helper';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  public id:any;
  public username:any;


  users=[
   {
     id:'',
     username :'',
     password:'',
     firstName:'',
     lastName:'',
     email:'',
     phone:''
   }
  ];


  constructor(private user:UserService) { }

  ngOnInit(): void {

    this.user.getAllUser().subscribe(
      (data:any)=>{
        this.users=data;
      },
      (error)=>{
         console.log("error");
         
      }
    );
  }


 

}
