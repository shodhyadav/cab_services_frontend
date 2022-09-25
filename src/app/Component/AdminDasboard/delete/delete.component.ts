import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchAll } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute , private users:UserService, private router:Router , private snack:MatSnackBar) { }
  id:any=0;

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('Id');
    
    this.users.delete(this.id).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log("error");
        
      }
    );
  }

}
