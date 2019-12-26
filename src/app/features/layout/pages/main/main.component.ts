import { Component, OnInit, ViewChild } from '@angular/core';
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
        console.log(res);
        const empresa = this.crypt.encrypt(res[0].empresa)
        localStorage.setItem('empresa', empresa)
        this.menuServ.setMenuData(res);
        // this.getUserProfiles(res[0].empresa);
      }
    })
  }

  getUserProfiles(empresa){
    this.menuServ.getProfiles(empresa).subscribe(( profData )=>{
      console.log("aca los perfiles..." , profData)
    })
  }

  getToRoute(item){
    if(item.nivel !== 1)
      this.router.navigate(['/' + item.opcion])
  }
}
