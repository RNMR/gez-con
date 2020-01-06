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
}