import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
  registrar(email: string , password: string){
    return new Promise ((resolve, rejects) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejects(err));
    });
  }

}
