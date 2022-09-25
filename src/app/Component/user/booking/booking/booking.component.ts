import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/Services/booking.service';
import { LocationService } from 'src/app/Services/location.service';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  user = this.login.getUser();
  public location: any;
  public cabVehicle: any;
  charge: any;
  public book = {
    userId: this.user.id,
    pickup_location: '',
    dropof_location: '',
    date: '',
    month: '',
    year: '',
    hour: '',
    min: '',
    period: '',
    comment: '',
    cabId: 9
  }

  public cabs = [
    {
      cab_Id: '',
      vehicle: '',
      available: true
    }
  ];

  cab = {
    cab_Id: '',
    vehicle: '',
    available: false
  };




  constructor(private users: UserService, private login: LoginService, private loc: LocationService, private booking: BookingService,
    private router: Router) { }

  ngOnInit(): void {
    this.loc.getAllLocation().subscribe(
      (data: any) => {
        this.location = data;
      },
      (error) => {

      }
    );

    // getting cabs

    this.booking.getAllCabs().subscribe(
      (data1: any) => {
        this.cabs = data1;

      },
      (error) => {

      }
    );



  }

  onSubmit() {

    this.booking.getCab(this.cab.cab_Id).subscribe(
      (data: any) => {
        this.cab = data;
        this.cab.available = false;
        this.booking.updateCab(this.cab).subscribe(
          (data) => {
            

          }
        )

      },
      (error: any) => {

      }
    );


    this.booking.addBooking(this.book).subscribe(
      (data: any) => {
        
        this.router.navigate(['/user/bookingSuccess/', data.id]);

      },
      (error: any) => {

      }
    )
  }
}