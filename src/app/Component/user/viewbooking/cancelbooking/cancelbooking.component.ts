import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/Services/booking.service';
import { CabServicesService } from 'src/app/Services/cab-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {

  id: any;
  bookings: any;
  cabs: any;
  constructor(private route: ActivatedRoute, private booking: BookingService, private cab: CabServicesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.booking.getBooking(this.id).subscribe(
      (data: any) => {
        this.bookings = data;

        this.cab.getCab(this.bookings.cabId).subscribe(
          (data: any) => {
            this.cabs = data;
            this.cabs.available = true;

            this.cab.update(this.cabs).subscribe(
              (data: any) => {

              }
            )
          }
        )

      }
    );



    this.booking.deleteBooking(this.id).subscribe(
      (data: any) => {
        Swal.fire('Success', 'Cancelled', 'success');

      }
    )

  }

}
