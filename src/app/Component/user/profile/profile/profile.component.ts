import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user=this.login.getUser();;

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

}
