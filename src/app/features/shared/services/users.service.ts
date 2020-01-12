import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EncryptDecryptService } from './EcryptDecryptService';

@Injectable()
export class UsersService {

  constructor(
    private http :HttpClient,
    private crypt :EncryptDecryptService,
  ){}

  getUsersList(empresa){
    return this.http.get(`${environment.url_basic}api/usuariolicencia/${empresa}`)
  }
  
  newUser(json){
    return this.http.post(`${environment.url_basic}api/usuario`, json)
  }
  
  updateUser(json){
    return this.http.put(`${environment.url_basic}api/usuario`, json)
  }
  
  deleteUser(user){
    return this.http.delete(`${environment.url_basic}api/usuario/${user}`)
  }
  
  detailUser(user){
    return this.http.get(`${environment.url_basic}api/empresaperfilusuario/${user}`)
  }
  
  addUserData(json){
    return this.http.post(`${environment.url_basic}api/empresaperfilusuario `, json)
  }
  
  editUserData(json){
    return this.http.put(`${environment.url_basic}api/empresaperfilusuario `, json)
  }
  
  deleteUserData(json){
    return this.http.delete(`${environment.url_basic}api/empresaperfilusuario `, json)
  }
}