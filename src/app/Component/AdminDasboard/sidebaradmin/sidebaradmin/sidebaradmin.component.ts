import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/Services/adminlogin.service';

@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.css']
})
export class SidebaradminComponent implements OnInit {

  constructor( private router: Router , private login:AdminloginService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.router.navigate(["home"]);
    this.login.logout();
    this.login.logInStatusSubject.next(false);
  }

}
