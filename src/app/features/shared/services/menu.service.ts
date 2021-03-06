import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  _menuData :BehaviorSubject<any>;
  menuObs :Observable<any>

  public get menuData() {
    return this._menuData.value;
  }

  constructor(
    private http: HttpClient,
  ){
    this._menuData = new BehaviorSubject<any>( [] )
    this.menuObs = this._menuData.asObservable()
  }
  
  getMenus(user: string){
    return this.http.get(`${environment.url_basic}api/menuusuario/${user}`)
  }
  
  getProfiles(empresa){
    return this.http.get(`${environment.url_basic}api/perfilempresa/${empresa}`)
  }

  getSingleProfile( id ){
    return this.http.get(`${environment.url_basic}api/perfil/${id}`)
  }

  createProfile( body ){
    return this.http.post(`${environment.url_basic}api/perfil`, body)
  }

  updateProfile( body ){
    return this.http.put(`${environment.url_basic}api/perfil`, body)
  }

  deleteProfile( id ){
    return this.http.delete(`${environment.url_basic}api/perfil/${id}`)
  }

  getProfileData( id, user = 'GEZCON' ){
    return this.http.get(`${environment.url_basic}api/menulicenciaperfil/${id}/${user}`)
  }

  setMenuData(data){
    this._menuData.next(data)
  }

  getMenuData(){
    return this._menuData.pipe()
  }
}