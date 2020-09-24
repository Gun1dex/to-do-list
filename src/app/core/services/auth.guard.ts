import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private  auth: AuthService, private afAuth: AngularFireAuth) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((res, rej) => {
        this.afAuth.onAuthStateChanged((user) => {
          if(user) {
            res(true);
          } else {
            this.router.navigate(['/auth/signin'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            rej(false);
          }
        });
      });
  }

}
