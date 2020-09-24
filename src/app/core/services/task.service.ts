import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ITask } from '../models/task';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private db: AngularFirestore, private auth: AuthService) { }

  createNewTask(toUser: string, nom: string, description: string) {
    return this.db.collection('Tasks').add({
      id_utilisateur: toUser,
      nom: nom,
      description: description
    });
  }

  getTasks() {
    return this.db.collection("Tasks", (ref) => ref.where("id_utilisateur", "==", this.auth.getCurrentUserId())).snapshotChanges().pipe(
      map((actions) =>
        actions.map((action) => {
          return { id: action.payload.doc.id, ... (action.payload.doc.data() as any) } as ITask;
        })
      )
    );
  }

  getTask(id: string) {
    return this.db.collection("Tasks", (ref) => ref.where("id_utilisateur", "==", this.auth.getCurrentUserId())).doc(id).get().pipe(
      map((action) => {
        return  { id: action.id, ... action.data() } as ITask;
      })
    );
  }

  modifyTask(id: string, nom_mod: string, description_mod: string) {
    this.db.doc("Tasks/" + id).update({
      nom: nom_mod,
      description: description_mod
    });
  }

  deleteTask(id: string) {
    this.db.doc("Tasks/" + id).delete();
  }
}
