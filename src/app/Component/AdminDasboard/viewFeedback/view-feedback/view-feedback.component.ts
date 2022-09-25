import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  Feedback=[
    {
      id:7,
      userId:'',
      username:'',
      email:'',
      message:''
    }
  ];

  constructor(private feed:FeedbackService) { }

  ngOnInit(): void {
    this.feed.getAllFeedback().subscribe(
      (data:any)=>{
        this.Feedback=data;
      }
    )
  }

}
