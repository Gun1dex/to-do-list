import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFirestore) { }

  getUsers() {
    return this.db.collection("Users").get().pipe(
      map((actions) =>
        actions.docs.map((action) => {
          return { id: action.id, ... (action.data() as any) } as IUser;
      })
    ));

  }
}
