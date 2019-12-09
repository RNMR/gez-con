import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class MenuService {
  
  constructor(
    private http: HttpClient,
  ){ }

  getMenus(user: string){
    return this.http.get(`${environment.url_basic}api/menuusuario/${user}`)
  }
}