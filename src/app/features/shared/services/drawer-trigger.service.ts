import { Injectable } from "@angular/core";
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class DrawerTriggerService {

  get menuHandler(){
    return this._menuHandler
  }
  set menuHandler(bool){
    this._menuHandler = !this._menuHandler
  }

  _menuHandler = false
  

  // data1 = new BehaviorSubject({action:this.menuHandler})
  data1 = new Subject()
  getData1$ = this.data1.asObservable();

  switchDrawer(bool :boolean) {
    this.menuHandler = bool
    this.data1.next({action:this.menuHandler})
  }
  
}