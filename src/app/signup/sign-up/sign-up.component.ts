import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private snack: MatSnackBar) { }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  x: any;
  atposition: any;
  dotposition: any;

  ngOnInit(): void {
  }

  onSubmit() {

    //Validation

    if (this.user.username.trim() == '' || this.user.username == "") {
      this.snack.open('UserName is Required', '', {
        duration: 3000,
      });
      return;
    }
    if (this.user.password.trim() == '' || this.user.password == "") {
      this.snack.open('Password is Required', '', {
        duration: 3000,
      });
      return;
    }
    if (this.user.firstName.trim() == '' || this.user.firstName == "") {
      this.snack.open('FirstName is Required', '', {
        duration: 3000,
      });
      return;
    }
    if (this.user.lastName.trim() == '' || this.user.lastName == "") {
      this.snack.open('LastName is Required', '', {
        duration: 3000,
      });
      return;
    }
    if (this.user.email.trim() == '' || this.user.email == "") {
      this.snack.open('Email is Required', '', {
        duration: 3000,
      });
      return;
    } else {
      this.x = this.user.email;
      this.atposition = this.x.indexOf("@");
      this.dotposition = this.x.lastIndexOf(".");
      if (this.atposition < 1 || this.dotposition < this.atposition + 2 || this.dotposition + 2 >= this.x.length) {
        this.snack.open('Enter valid email address', '', {
          duration: 3000,
        });
        return ;
      }
    }
   
    //Validation Complete



    this.userService.addUser(this.user).subscribe(
      (data:any) => {
        if(data==null)
        Swal.fire('Error', 'Username already exists', 'error');
        else{
        Swal.fire('Success', 'Registration Successfull', 'success');
        this.router.navigate(['/login']);
        }
      },
      (error) => {
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    )
  };

}