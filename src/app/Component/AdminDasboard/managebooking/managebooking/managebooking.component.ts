import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/Services/booking.service';
import { CabServicesService } from 'src/app/Services/cab-services.service';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {

  bookings=[
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

  constructor(private cabs:CabServicesService , private book:BookingService) { }

  ngOnInit(): void {
    this.book.getAllBooking().subscribe(
      (data:any)=>{
        this.bookings=data;
        console.log(this.bookings);
        
      }
    )
  }

}
