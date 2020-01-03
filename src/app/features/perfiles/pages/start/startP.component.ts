import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/features/shared/services/menu.service';
import { PositionSettings, IgxDialogModule } from 'igniteui-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-StartP',
  templateUrl: './startP.component.html',
  styleUrls: ['./startP.component.scss']
})
export class StartPComponentComponent implements OnInit {
  menues;

  currentProfile = {};
  newProfileForm: FormGroup

  public positionSettings: PositionSettings = {
    minSize: { height: 500, width: 500 }
  }

  profiles = [];
  constructor(
    private menuServ: MenuService,
    private fb: FormBuilder,
  ) {
    this.newProfileForm = this.fb.group({
      name:     [],
      empresa:  [],

    })
  }

  ngOnInit(): void {
    this.menuServ.menuObs.subscribe(menu=>{
      if(menu.length > 0){
        console.log(menu, "!!!!!")
        this.menues = menu
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

  manageProfile( prof ){
    this.menuServ.getSingleProfile( prof.perfil ).subscribe ((data)=>{
      console.log("samey data)", data, prof)
    })
  }

  createProfile( diag: any ){

    diag.close()
  }

  deleteProfile(currentProfile, deleteDialog){
    this.menuServ.deleteProfile(currentProfile.perfil).subscribe(()=>{
      this.getUserProfiles( this.menues[0].empresa )
    })
  }
}
