import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerTriggerService } from 'src/app/features/shared/services/drawer-trigger.service';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  vavrvar

  @ViewChild(IgxNavigationDrawerComponent, {static:true}) navigation : IgxNavigationDrawerComponent
  constructor(
    // private session: string
    private DTService : DrawerTriggerService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.vavrvar = this.DTService.menuHandler
    this.swapMenu(this.vavrvar)
    this.DTService.getData1$.subscribe((bool)=>{
      this.swapMenu(bool)
    })
    const segments: UrlSegment[] = this.route.snapshot.url;
    console.log(segments, window.location.pathname, this.route.snapshot.url)
  }
  
  swapMenu(bool){
    this.navigation.toggle()
  }
}
