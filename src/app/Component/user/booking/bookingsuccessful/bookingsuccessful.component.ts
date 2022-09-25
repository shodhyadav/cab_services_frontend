import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookingsuccessful',
  templateUrl: './bookingsuccessful.component.html',
  styleUrls: ['./bookingsuccessful.component.css']
})
export class BookingsuccessfulComponent implements OnInit {

  id = 0;

  constructor(private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}
