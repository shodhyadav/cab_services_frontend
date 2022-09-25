import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminloginService } from '../Services/adminlogin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public isCheck=false;

  constructor(private snack: MatSnackBar, private login: AdminloginService , private router : Router) { }

  loginData = {
    username: '',
    password: '',
  };

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      this.snack.open('UserName is Required', '', {
        duration: 3000,
      });
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open('password is Required', '', {
        duration: 3000,
      });
      return;
  }

    //Request to generate token

    this.login.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log("success");
        console.log(data);

        //Log In

        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
             this.login.setUser(user);
             console.log(user);

             //Redirecting admin or user dashboard

             this.login.logInStatusSubject.next(true);
             this.router.navigate(["admin"]);

            
          });

      },
      (error) => {
        Swal.fire('Error', 'Wrong credential', 'error');
      }
    )

  }

  public user(){
    this.router.navigate(["login"]);
  }

  public admin(){
    this.router.navigate(["adminlogin"]);
  }

}
