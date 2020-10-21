import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Historico } from '../models/historico';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService { 

  constructor(private afs: AngularFirestore,) { }
  // create
  public create(historico: Historico) {
    return this.afs.collection('historicos').add({...historico})
  }
  public getAll() {
      return this.afs.collection('historico').snapshotChanges();

  }
  public update(key: string, historico: Historico) {
    return this.afs.doc(`historicos/${key}`).update(historico);

  }
  public delete(key: string) {
    return this.afs.doc(`historicos/${key}`).delete();
  }

}
