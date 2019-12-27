import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/features/shared/services/menu.service';

@Component({
  selector: 'app-StartP',
  templateUrl: './StartP.component.html',
  styleUrls: ['./StartP.component.scss']
})
export class StartPComponentComponent implements OnInit {
  counter = 0;

  profiles = [];
  constructor(
    private menuServ: MenuService,
  ) { }

  ngOnInit(): void {
    this.menuServ.menuObs.subscribe(menu=>{
      if(menu.length > 0){
        console.log(menu, "!!!!!")
        this.getUserProfiles( menu[0].empresa )
      }
    })
  }

  getUserProfiles(empresa){
    this.menuServ.getProfiles(empresa).subscribe(( profData:any[] )=>{
      console.log("perfiles, de sartP!" , profData)
      this.profiles = profData;
    })
  }

}
