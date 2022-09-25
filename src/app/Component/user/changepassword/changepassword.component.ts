import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  public user=this.login.getUser();
  public confirm:any;


  constructor(private login:LoginService , private users:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.user.password==this.confirm){
      this.users.update(this.user).subscribe(
        (data)=>{
          Swal.fire('Success', 'Password Updated', 'success');
        },
        (error)=>{
          Swal.fire('Error', 'Something wrong', 'error');
        }
      );
    }else{
      Swal.fire('Error', 'Password Not Matched', 'error');
    }
  }



}
