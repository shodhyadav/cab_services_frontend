import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactus={
    firstName:'',
    lastName:'',
    email:'',
    message:''
  };

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.user.addContact(this.contactus).subscribe(
      (data:any)=>{
        console.log(data);
        
      },(error)=>{
        Swal.fire('Success','Thank you','success');
      }
    )
  }

}
