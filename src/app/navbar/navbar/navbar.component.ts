import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/Services/adminlogin.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser = false;
  isLoggedIn = false;
  user = this.login.getUser();

  constructor(public login: LoginService, public adminli: AdminloginService, private router: Router) { }

  ngOnInit(): void {


    //////  For USer
    this.isLoggedIn = this.login.isLoggedin();
    this.user = this.login.getUser();
    this.login.logInStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedin();
      this.user = this.login.getUser();
    })
    this.adminli.logInStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedin();
      this.user = this.login.getUser();
    })

  
  }


  public logout() {

    // for user
    this.router.navigate(["home"]);
    this.login.logout();
    this.login.logInStatusSubject.next(false);

    //for admin
    this.adminli.logout();
    this.adminli.logInStatusSubject.next(false);
  }

}
