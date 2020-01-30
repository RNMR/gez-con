import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/features/shared/services/menu.service';
import { PositionSettings, IgxDialogModule } from 'igniteui-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { clone } from 'ramda'
import { EncryptDecryptService } from 'src/app/features/shared/services/EcryptDecryptService';
import { iif } from 'rxjs';

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

  isEdit = false;
  startingForm;
  profiles = [];
  selectedProfile :any;
  constructor(
    private menuServ: MenuService,
    private fb: FormBuilder,
    private crypt: EncryptDecryptService,
  ) {
    this.newProfileForm = this.fb.group({
      descripcion:     [ null, Validators.required ],
      descripcionempresa:  [ null, Validators.required ],
      perfil:   [ null, Validators.required ],
      estado:   [ 1, Validators.required ]
    })
    this.startingForm = clone( this.newProfileForm.value )
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
      //Esta data del console es la misma, la funcion es irrelevante
    })
  }

  createProfile( diag: any ){
    const dateObj = new Date();
    const month = (dateObj.getUTCMonth() + 1).toString().length === 1 ? "0" + (dateObj.getUTCMonth() + 1) : (dateObj.getUTCMonth() + 1); 
    const day = dateObj.getUTCDate().toString().length === 1 ? "0" + dateObj.getUTCDate():dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    
    const today = year + "-" + month + "-" + day;
    const user = this.crypt.decrypt( localStorage.getItem('userName') );
    // const obj = clone(this.newProfileForm.value)
    const obj = {
      "perfil":  this.newProfileForm.get('perfil').value,
      "descripcion": this.newProfileForm.get('descripcion').value,
      "empresa": this.menues[0].empresa,
      "descripcionempresa":  this.newProfileForm.get('descripcionempresa').value,
      "estado": this.newProfileForm.get('estado').value,
      "creacionUsuario": user,
      "creacionFecha": today,
      "modUsuario":  user,
      "modFecha":  today
    }
    if ( this.newProfileForm.valid )
      this.menuServ.createProfile( obj ).subscribe((res)=>{
        this.getUserProfiles( this.menues[0].empresa )
        diag.close()
      }, (e)=>{
        if( e.status === 200 ){
          this.getUserProfiles( this.menues[0].empresa )
          diag.close()
        }
      })
    else
      console.log("ERROR")
    ;
  }

  editProfile(diag){
    const dateObj = new Date();
    const month = (dateObj.getUTCMonth() + 1).toString().length === 1 ? "0" + (dateObj.getUTCMonth() + 1) : (dateObj.getUTCMonth() + 1); 
    const day = dateObj.getUTCDate().toString().length === 1 ? "0" + dateObj.getUTCDate():dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    
    const today = year + "-" + month + "-" + day;
    const user = this.crypt.decrypt( localStorage.getItem('userName') );
    const body = {
      "perfil":  this.newProfileForm.get('perfil').value,
      "descripcion": this.newProfileForm.get('descripcion').value,
      "empresa": this.menues[0].empresa,
      "descripcionempresa":  this.newProfileForm.get('descripcionempresa').value,
      "estado": this.newProfileForm.get('estado').value,
      "creacionUsuario": this.selectedProfile.creacionUsuario,
      "creacionFecha": this.selectedProfile.creacionFecha,
      "modUsuario":  user,
      "modFecha":  today
    }
    if (this.newProfileForm.valid)
      this.menuServ.updateProfile(body).subscribe((res)=>{
        this.getUserProfiles( this.menues[0].empresa )
        diag.close()
      }, (e)=>{
        if( e.status === 200 ){
          this.getUserProfiles( this.menues[0].empresa )
          diag.close()
        }
      })
  }

  deleteProfile(currentProfile, deleteDialog){
    this.menuServ.deleteProfile(currentProfile.perfil).subscribe(()=>{
      deleteDialog.close();
      this.getUserProfiles( this.menues[0].empresa )
    }, (e)=>{
      if( e.status === 200 ){
        deleteDialog.close();
        this.getUserProfiles( this.menues[0].empresa )
      }
    })
  }
  
  refreshForm(){
    this.newProfileForm.setValue(this.startingForm);
  }

  edit(profile){
    this.selectedProfile = profile;
    const obj = {
      descripcion: profile.descripcion,
      descripcionempresa: profile.descripcionempresa,
      perfil: profile.perfil,
      estado: profile.estado
    }
    this.newProfileForm.setValue(obj)
  }
}
