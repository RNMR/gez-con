import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/features/shared/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private authSrv: AuthenticationService,

  ) { }

  ngOnInit(): void {
    
  }
  
  logOut(){
    this.authSrv.logout()
  }
}
