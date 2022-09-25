import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/Services/booking.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  public user = this.users.getUser();
  public bookings = [
    {
      id: '',
      userId: '',
      pickup_location: '',
      dropof_location: '',
      date: '',
      month: '',
      year: '',
      hour: '',
      min: '',
      period: '',
      comment: ''
    }
  ];

  constructor(private booking: BookingService, private users: LoginService) { }

  ngOnInit(): void {
    this.booking.getAllBooking().subscribe(
      (data: any) => {
        this.bookings = data;



      },
      (error) => {

      }
    );
  }

}
