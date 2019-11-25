import { Component, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { DrawerTriggerService } from './features/shared/services/drawer-trigger.service';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tester';

  vavrvar

  @ViewChild(IgxNavigationDrawerComponent, {static:true}) navigation : IgxNavigationDrawerComponent
  constructor(
    private DTService : DrawerTriggerService,
  ){

  }
  
  ngOnInit(){
    this.vavrvar = this.DTService.menuHandler
    this.swapMenu(this.vavrvar)
    this.DTService.getData1$.subscribe((bool)=>{
      this.swapMenu(bool)
    })
  }

  swapMenu(bool){
    this.navigation.toggle()
  }

}
