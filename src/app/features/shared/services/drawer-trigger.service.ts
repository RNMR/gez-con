import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

@Injectable()
export class DrawerTriggerService {

  menuHandler = {
    action: false
  };
  
  openMenu(bool?): Observable<any> {
    if(bool)
      this.menuHandler.action = bool
    return of(this.menuHandler)
  }

}