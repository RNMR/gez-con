import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import * as _ from 'lodash';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // if((!_.includes(req.url, 'v1/identity') && !_.includes(req.url,'amazonaws')) && this.authSer.currentUserValue)
    // if(!_.includes(req.url, 'authenticate') )
      //Now for when the token expires
      // if ()
      // return next.handle(req.clone({
      //   setHeaders: {
      //     'Authorization': 'Bearer'+' '+localStorage.getItem('currentUser')
      //     // 'Authorization': 'Bearer'+' '+localStorage.getItem('currentUser').replace(/"/g,"")
      //   }
      // }))
      
    return next.handle(req).pipe(
      catchError((err :HttpErrorResponse)=>{
        
        if(err.status === 0 || err.status === 403){
          this.router.navigate(['login'])
        }
        console.log("error!", err)
        return throwError( err )
      })
    )
  }

  constructor(
    private router :Router
  ){ }
}