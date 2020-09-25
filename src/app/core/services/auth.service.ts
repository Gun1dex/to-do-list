import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from '../models/user';

export function authFactory(provider: AuthService) {
  return () => provider.loadAuth();
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: IUser;

  constructor(private router: Router, private afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      if(user) {
        this.db.collection("Users").doc(user.uid).get().subscribe((data) => {
          this.user = {
            id: user.uid, ... data.data()
          } as IUser;
          console.log(this.user);
        });
      } else {
        this.user = null;
      }
    });
  }

  public loadAuth() {

  }

  createNewUser(username_param: string, email_param: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email_param, password).then((data) => {
      console.log('iud', data.user.uid);
      this.db.collection("Users").doc(data.user.uid).set( {
        email: email_param,
        username: username_param
      })
    });
  }

  signInUser(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/']);
    });
  }

  signOutUser() {
    this.afAuth.signOut();
  }

  isAuthenticated() {
    return !!this.user;
  }

  getCurrentUserName() {
    return this.user ? this.user.username : null;
  }

  getCurrentUserId() {
    return this.user ? this.user.id : null;
  }
}
