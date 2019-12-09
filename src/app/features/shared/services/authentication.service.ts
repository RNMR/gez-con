import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../modal/user';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EncryptDecryptService } from './EcryptDecryptService';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  constructor(
    private http: HttpClient,
    private crypt: EncryptDecryptService,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
  login(username: string, password: string) {
    return this.http.post<any>(`${environment.url_basic}${environment._user.auth}`, { username: username, password: password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        console.log("auth serv, res", user)
        localStorage.setItem('currentUser', user.tok);
        const encryptd = this.crypt.encrypt(username);
        localStorage.setItem('userName', encryptd);
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.currentUserSubject.next(null);

    this.router.navigate(['login'])
  }
}