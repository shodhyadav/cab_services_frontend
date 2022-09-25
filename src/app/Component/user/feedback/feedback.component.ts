import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {
  user=this.login.getUser();
  email:any;
  message:any;

  feedback=
    {
      userId:'',
      username:'',
      email:'',
      message:''
    }
  constructor(private feed:FeedbackService, private login:LoginService , private router:Router) {
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.feedback.userId=this.user.id;
    this.feedback.username=this.user.username;
    this.feed.addFeedback(this.feedback).subscribe(
      (data:any)=>{
        this.router.navigate(['/user/submit']);
      }
    )


  }

}
