import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/features/shared/services/menu.service';

@Component({
  selector: 'app-StartP',
  templateUrl: './StartP.component.html',
  styleUrls: ['./StartP.component.scss']
})
export class StartPComponentComponent implements OnInit {
  constructor(
    private menuServ: MenuService,
  ) { }

  ngOnInit(): void {
    this.menuServ.menuObs.subscribe(menu=>{
      console.log(menu, "!!!!!")
    })
  }
}
