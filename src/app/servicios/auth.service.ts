import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { resolve } from 'dns';
import { rejects } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth) { }

  login(email: string, password: string){

      // tslint:disable-next-line: no-shadowed-variable
      return new Promise ((resolve, rejects) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejects(err));
    });
  }

}
