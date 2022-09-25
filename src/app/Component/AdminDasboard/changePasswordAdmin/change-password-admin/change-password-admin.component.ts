import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password-admin',
  templateUrl: './change-password-admin.component.html',
  styleUrls: ['./change-password-admin.component.css']
})
export class ChangePasswordAdminComponent implements OnInit {
  public user=this.login.getUser();
  public confirm:any;

  constructor(private login:LoginService , private users:AdminServiceService) { }

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
