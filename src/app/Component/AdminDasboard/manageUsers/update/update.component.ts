import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchAll } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor( private route:ActivatedRoute , private users:UserService, private router:Router , private snack:MatSnackBar) { }

  id:any=0;
  user:any;

  x: any;
  atposition: any;
  dotposition: any;

  ngOnInit(): void {

    this.id=this.route.snapshot.paramMap.get('Id');

    this.users.getUser(this.id).subscribe(
      (data)=>{
        this.user=data;
        console.log(data);
        
      },
      (error)=>{
        console.log("error");
        
      }
    );
  }
  

  onSubmit(){

    //Validation form
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


    //  Validation complete


    this.users.update(this.user).subscribe(
      (data:any)=>{
        console.log(this.user);
        
      },
      (error)=>{
        console.log("error");
        
      }
    )

    this.snack.open('Succesfully Updated', '', {
      duration: 3000,
    });

    this.router.navigate(["/admin/manageUsers"]);

  }

}
