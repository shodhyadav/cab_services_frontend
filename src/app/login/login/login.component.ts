import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import baseUrl from 'src/app/Services/helper';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isCheck=false;

  constructor(private snack: MatSnackBar, private login: LoginService , private router : Router) { }

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
             this.router.navigate(["user"]);

            
          });

      },
      (error) => {
        Swal.fire('Error', 'Wrong credential', 'error');
      }
    )

  }

  public user(){
    this.isCheck=false;
  }

  public admin(){
    this.router.navigate(["adminlogin"]);
  }

}