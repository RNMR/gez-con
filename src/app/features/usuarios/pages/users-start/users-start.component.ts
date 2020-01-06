import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/features/shared/services/users.service';

@Component({
  selector: 'app-users-start',
  templateUrl: './users-start.component.html',
  styleUrls: ['./users-start.component.scss']
})
export class UsersStartComponent implements OnInit {

  arr;
  constructor(
    private userServ:UsersService,
  ) { }

  ngOnInit(): void {
    this.userServ.getUsersList('GEZCON').subscribe((userData)=>{
      this.arr = userData;
      console.log("user data, ", userData)
    })
  }
}
