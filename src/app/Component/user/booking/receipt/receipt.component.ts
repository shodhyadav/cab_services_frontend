import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/Services/booking.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
   
  id:any;
  book:any;
  constructor(private route:ActivatedRoute ,private users:LoginService , private booking:BookingService) { }

  user=this.users.getUser();

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.booking.getBooking(this.id).subscribe(
        (data:any)=>{
            this.book=data;
        },
        (error)=>{

        }
      );
  }


}
