import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      return true;
    } else {
      // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } }); 
      localStorage.clear();
      this.router.navigate(['/login']); 
      return false;
    }

  }
}
