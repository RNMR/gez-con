import { Component } from "@angular/core";
import { DrawerTriggerService } from 'src/app/features/shared/services/drawer-trigger.service';

@Component({
  templateUrl: './start.component.html',
  styleUrls: ['start.component.scss'],
})
export class StartComponent {

  constructor(
    private DTService: DrawerTriggerService,
  ) { }

  retort(){
    this.DTService.switchDrawer(!this.DTService.menuHandler)
  }
}