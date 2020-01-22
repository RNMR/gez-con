import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DrawerTriggerService } from 'src/app/features/shared/services/drawer-trigger.service';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { MenuService } from 'src/app/features/shared/services/menu.service';
import { EncryptDecryptService } from 'src/app/features/shared/services/EcryptDecryptService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  vavrvar
  
  @HostListener("window:beforeunload", ["$event"])
  clearLocalStorage(event) {
      // localStorage.clear();
      // console.log('####Destroy local storage####');
  }

  @ViewChild(IgxNavigationDrawerComponent, {static:true}) navigation : IgxNavigationDrawerComponent
  constructor(
    // private session: string
    private DTService : DrawerTriggerService,
    private router: Router,
    private route: ActivatedRoute,
    private menuServ: MenuService,
    private crypt: EncryptDecryptService,
  ) { }

  menuItems = [];

  ngOnInit(): void {
    this.vavrvar = this.DTService.menuHandler
    this.swapMenu(this.vavrvar)
    this.DTService.getData1$.subscribe((bool)=>{
      this.swapMenu(bool)
    })
    const segments: UrlSegment[] = this.route.snapshot.url;
    // console.log(segments, window.location.pathname, this.route.snapshot.url)

    this.geetMenuByUser()
  }
  
  swapMenu(bool){
    this.navigation.toggle()
  }

  geetMenuByUser(){
    let username = localStorage.getItem('userName')
    const user = this.crypt.decrypt( username )
    this.menuServ.getMenus(user).subscribe((res: any[])=>{
      this.menuItems = res;
      if( res.length > 0 ) {
        const empresa = this.crypt.encrypt(res[0].empresa)
        localStorage.setItem('empresa', empresa)
        this.menuServ.setMenuData(res);
      }
    })
  }

  getToRoute(item){
    if(item.nivel !== 1)
      this.router.navigate(['/' + item.opcion])
  }
}
