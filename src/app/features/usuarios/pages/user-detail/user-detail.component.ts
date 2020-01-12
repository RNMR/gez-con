import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { clone } from 'ramda'
import { UsersService } from 'src/app/features/shared/services/users.service';
import { EncryptDecryptService } from 'src/app/features/shared/services/EcryptDecryptService';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  deatilsData;
  currentParam;

  userName;
  startingForm;

  formDataUser :FormGroup
  editBool = false;
  constructor(
    private userServ :UsersService,
    private crypt :EncryptDecryptService,
    private route :ActivatedRoute,
    private fb :FormBuilder,
    private router :Router,
  ) {
    this.route.paramMap.subscribe((paramMap)=>{
      console.log("2param", paramMap);
      this.currentParam = paramMap;
    })

    this.formDataUser = this.fb.group({
      empresa: [ '' ],
      descEmpresa: [ '' ],
      perfil: [ '' ],
      descPerfil: [ '' ],
      username: [this.currentParam],
      estado: [ '' ],
      indDefecto: [ '' ],
      creacionUsuario: ["dbagezcon"],
      creacionFecha: [],
      modUsuario: [null],
      modFecha: [null],
    })
    this.startingForm = clone( this.formDataUser.value )
  }

  ngOnInit(): void {
    this.userName = this.crypt.decrypt( localStorage.getItem('userName') );
    this.getAllUserDetailsData() 
  }

  getAllUserDetailsData(){
    this.userServ.detailUser(this.userName).subscribe((detUser)=>{
      this.deatilsData = detUser;
      console.log("user detail", detUser)
    })
  }
  
  deleteUser(successToast){
    console.log("2param", this.currentParam);
    this.userServ.deleteUser(this.currentParam).subscribe((conf)=>{
      successToast.show()
      this.router.navigate(['usuarios'])
    })
  }

  deleteUserRegister(item, successToast){
    this.userServ.deleteUserData(item).subscribe((res)=>{
      this.getAllUserDetailsData()
      successToast.show()
    })
  }

  editUserData(item, successToast){
    this.userServ.editUserData(item).subscribe((res)=>{
      successToast.show()
      this.getAllUserDetailsData()
    })
  }

  newUserData(item, successToast){
    this.userServ.addUserData(item).subscribe((res)=>{
      successToast.show()
      this.getAllUserDetailsData()
    })
  }

  onSubmiit( formValue, successToast ){
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    const today = year + "-" + month + "-" + day;

    formValue.creacionFecha = today

    if( !this.editBool ){
      this.newUserData(formValue, successToast)
    } else {
      this.editUserData(formValue, successToast)
    }
  }
  
  edit(item){
    this.formDataUser.setValue(item);
  }
  
  refreshForm(){
    this.formDataUser.setValue(this.startingForm);
  }
}
