import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import * as _ from 'lodash';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // if((!_.includes(req.url, 'v1/identity') && !_.includes(req.url,'amazonaws')) && this.authSer.currentUserValue)
    if(!_.includes(req.url, 'authenticate') && this.authSer.currentUserValue)
      //Now for when the token expires
      return next.handle(req.clone({
        setHeaders: {
          'Authorization': 'Bearer'+' '+localStorage.getItem('currentUser')
          // 'Authorization': 'Bearer'+' '+localStorage.getItem('currentUser').replace(/"/g,"")
        }
      }))
      
    return next.handle(req)
  }

  constructor(
    private authSer :AuthenticationService
  ){ }
}