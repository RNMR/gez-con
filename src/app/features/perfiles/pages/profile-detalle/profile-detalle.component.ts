import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EncryptDecryptService } from 'src/app/features/shared/services/EcryptDecryptService';
import { MenuService } from 'src/app/features/shared/services/menu.service';
import { sort } from 'ramda';

@Component({
  selector: 'app-profile-detalle',
  templateUrl: './profile-detalle.component.html',
  styleUrls: ['./profile-detalle.component.scss']
})
export class ProfileDetalleComponent implements OnInit {

  allPermits = [];

  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private crypt: EncryptDecryptService,
    private menuServ: MenuService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.getAllPermissions( params.perfil )
    })
  }
  
  getAllPermissions( perfl ){
    let username = localStorage.getItem('userName')
    const user = this.crypt.decrypt( username )
    this.menuServ.getProfileData( perfl ).subscribe(( dataPermits:any[] )=>{
      //Data ha sido ordenada por niveles
      // this.allPermits = sort( (a,b)=>{ return (a.nivel-b.nivel) }, dataPermits )
      this.allPermits = dataPermits
    })
  }
}
