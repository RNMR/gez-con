import { Component } from "@angular/core";
import { DrawerTriggerService } from 'src/app/features/shared/services/drawer-trigger.service';
import { AuthenticationService } from 'src/app/features/shared/services/authentication.service';

@Component({
  templateUrl: './start.component.html',
  styleUrls: ['start.component.scss'],
})
export class StartComponent {

  constructor(
    private DTService: DrawerTriggerService,
    private authSrv: AuthenticationService,
  ) { }

  retort(){
    this.DTService.switchDrawer(!this.DTService.menuHandler)
  }

  logOut(){
    this.authSrv.logout()
  }
}