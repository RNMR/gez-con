import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/features/shared/services/users.service';

import { clone } from 'ramda';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EncryptDecryptService } from 'src/app/features/shared/services/EcryptDecryptService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-start',
  templateUrl: './users-start.component.html',
  styleUrls: ['./users-start.component.scss']
})
export class UsersStartComponent implements OnInit {

  userArr;

  newUser: FormGroup;
  userApp = ''
  
  startingForm = {};
  editBool = false;
  
  constructor(
    private fb: FormBuilder,
    private router :Router,
    private userServ:UsersService,
    private crypt: EncryptDecryptService,
  ) {
    const user = this.crypt.decrypt( localStorage.getItem('userName') );
    this.newUser = this.fb.group({
      username: [''],
      nombre: [''],
      password: [''],
      email: [null],
      telefono: [null],
      fechaUltimoIngreso: [null],
      idUserDB: ["0"], //check
      sexo: ['M'],
      foto: [''],
      //Not dynamic
      codLicencia: ['GEZCON'],
      estado: ['1'],
      creacionUsuario: [ user ],
      creacionFecha: [''],
      modUsuario: [user],
      modFecha: [''],
    })
    this.startingForm = clone( this.newUser.value )
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    //Not dynamic
    this.userServ.getUsersList('GEZCON').subscribe((userData:any[])=>{
      this.userArr = clone(userData);
      let counter = 0;
      while(this.userArr.length < 4 || counter >8) {
        counter++;
        this.userArr.push({username:null})
      }
      console.log("user data, ", userData)
    })
  }

  onSubmit(formValue, dialog, successToast, errorToast){
    const dateObj = new Date();
    const month = (dateObj.getUTCMonth() + 1).toString().length === 1 ? "0" + (dateObj.getUTCMonth() + 1) : (dateObj.getUTCMonth() + 1); 
    const day = dateObj.getUTCDate().toString().length === 1 ? "0" + dateObj.getUTCDate():dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    const today = year + "-" + month + "-" + day;

    formValue.modFecha = today
    formValue.telefono = formValue.telefono.toString()
    console.log("form:", formValue);
    if( this.editBool ){
      // try{
        formValue.creacionFecha = today
        this.userServ.newUser(formValue).subscribe((res)=>{
          console.log("new", res)
          dialog.close();
          successToast.show()
          this.getAllUsers()
        })
      // } catch {
      //   errorToast.show()
      // }
    } else {
      this.userServ.updateUser(formValue).subscribe((res)=>{
        console.log("updated", res)
        dialog.close();
        successToast.show()
        this.getAllUsers()
      })
    }
  }

  edit(item){
    this.newUser.setValue(item);
  }

  refreshForm(){
    this.newUser.setValue(this.startingForm);
  }

  goToMant(item){
    this.router.navigate(['usuarios','detalle', item.username])
  }
}
