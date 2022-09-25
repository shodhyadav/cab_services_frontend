import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router, private login:LoginService) { }

  ngOnInit(): void {
  }
  
  public logout(){
    this.router.navigate(["home"]);
    this.login.logout();
    this.login.logInStatusSubject.next(false);
  }

}
