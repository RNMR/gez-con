import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/features/shared/services/users.service';

import { clone } from 'ramda';

@Component({
  selector: 'app-users-start',
  templateUrl: './users-start.component.html',
  styleUrls: ['./users-start.component.scss']
})
export class UsersStartComponent implements OnInit {

  userArr;
  constructor(
    private userServ:UsersService,
  ) { }

  ngOnInit(): void {
    this.userServ.getUsersList('GEZCON').subscribe((userData:any[])=>{
      this.userArr = clone(userData);
      let counter = 0;
      while(this.userArr.length < 5 || counter >8) {
        counter++;
        this.userArr.push({username:null})
      }
      console.log("user data, ", userData)
    })
  }
}
